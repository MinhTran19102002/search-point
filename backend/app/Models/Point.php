<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use PDOException;

class Point extends Model
{
    // private $db;

    // public function __construct($database_connection)
    // {
    //     $this->db = $database_connection;
    // }
    //
    protected $primaryKey = 'sbd'; // 👈 nếu bạn dùng `sbd` làm khóa chính

    public $incrementing = false;  // 👈 vì `sbd` là string, không tự tăng

    protected $keyType = 'string'; // 👈 để Laravel biết khóa chính là string

    public $timestamps = false;

    protected $fillable = [
        'sbd',
        'toan',
        'ngu_van',
        'ngoai_ngu',
        'vat_li',
        'hoa_hoc',
        'sinh_hoc',
        'lich_su',
        'dia_li',
        'gdcd',
        'ma_ngoai_ngu',
    ];
    const VALID_SUBJECTS = ['toan', 'ngu_van', 'ngoai_ngu', 'vat_li', 'hoa_hoc', 'sinh_hoc', 'lich_su', 'dia_li', 'gdcd'];

    public static function getScoreStatisticsBySubject($subject)
    {
        // Kiểm tra môn học có hợp lệ không
        if (!in_array($subject, self::VALID_SUBJECTS)) {
            throw new \InvalidArgumentException("Môn học không hợp lệ: {$subject}");
        }

        $statistics = self::selectRaw("
            COUNT(CASE WHEN {$subject} >= 8 AND {$subject} IS NOT NULL THEN 1 END) as excellent,
            COUNT(CASE WHEN {$subject} < 8 AND {$subject} >= 6 AND {$subject} IS NOT NULL THEN 1 END) as good,
            COUNT(CASE WHEN {$subject} < 6 AND {$subject} >= 4 AND {$subject} IS NOT NULL THEN 1 END) as average,
            COUNT(CASE WHEN {$subject} < 4 AND {$subject} IS NOT NULL THEN 1 END) as poor,
            COUNT(CASE WHEN {$subject} IS NOT NULL THEN 1 END) as total_valid
        ")->first();

        return [
            'excellent' => (int)$statistics->excellent,
            'good' => (int)$statistics->good,
            'average' => (int)$statistics->average,
            'poor' => (int)$statistics->poor,
            'total' => (int)$statistics->total_valid
        ];
    }


    public static function getScoreTop10($subjects, $limit = 10)
    {
        if (!is_array($subjects) || empty($subjects)) return '1';

        foreach ($subjects as $subject) {
            if (!in_array($subject, self::VALID_SUBJECTS)) return '2';
        }
        try {
            $sum_formula = implode(' + ', $subjects);
            $where_conditions = array_map(fn($s) => "$s IS NOT NULL", $subjects);
            $where_clause = implode(' AND ', $where_conditions);

            return self::selectRaw("sbd, toan, ngu_van, ngoai_ngu, vat_li, hoa_hoc, sinh_hoc, lich_su, dia_li, gdcd, ma_ngoai_ngu, ($sum_formula) as tong_diem")
                ->whereRaw($where_clause)
                ->orderByRaw("($sum_formula) DESC")
                ->limit($limit)
                ->get()
                ->map(function ($item) {
                    $item->tong_diem = round($item->tong_diem, 2);
                    return $item;
                });
        } catch (PDOException $e) {
            return $e;
        }
    }
}
