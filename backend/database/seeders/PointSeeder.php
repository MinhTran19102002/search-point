<?php

namespace Database\Seeders;

use App\Models\Point;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;

class PointSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $path = storage_path('app/diem_thi_thpt_2024.csv');

        if (!File::exists($path)) {
            $this->command->error("Không tìm thấy file CSV: $path");
            return;
        }

        $file = fopen($path, 'r');
        $header = fgetcsv($file); // Đọc dòng tiêu đề

        while (($row = fgetcsv($file)) !== false) {
            $data = array_combine($header, $row);

            Point::create([
                'sbd' => $data['sbd'],
                'toan' => $this->toFloat($data['toan']),
                'ngu_van' => $this->toFloat($data['ngu_van']),
                'ngoai_ngu' => $this->toFloat($data['ngoai_ngu']),
                'vat_li' => $this->toFloat($data['vat_li']),
                'hoa_hoc' => $this->toFloat($data['hoa_hoc']),
                'sinh_hoc' => $this->toFloat($data['sinh_hoc']),
                'lich_su' => $this->toFloat($data['lich_su']),
                'dia_li' => $this->toFloat($data['dia_li']),
                'gdcd' => $this->toFloat($data['gdcd']),
                'ma_ngoai_ngu' => $data['ma_ngoai_ngu'] ?? null,
            ]);
        }

        fclose($file);
    }

    private function toFloat($value)
    {
        return $value === '' ? null : (float) $value;
    }
}
