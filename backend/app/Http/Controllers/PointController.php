<?php

namespace App\Http\Controllers;

use App\Models\Point;
use Illuminate\Http\Request;

class PointController extends Controller
{
    //
    public function findBySbd($sbd)
    {
        $point = Point::where('sbd', $sbd)->first();
        // print($point);


        if (!$point) {
            return response()->json([
                'error' => 'Không tìm thấy thí sinh với SBD: ' . $sbd,
                'message' => 'Thất bại',
                'statusCode' => 404,
                'data' => null,
            ], 404);
        }

        return response()->json([
            'message' => 'Thành công',
            'statusCode' => 200,
            'data' => $point,
        ]);
    }

    public function getScoreStatistics(Request $request)
    {
        try {
            $subject = $request->input('subject');
            $stats = Point::getScoreStatisticsBySubject($subject);

            return response()->json([
                'message' => 'Thành công',
                'statusCode' => 200,
                'data' => $stats
            ]);
        } catch (\InvalidArgumentException $e) {
            return response()->json([
                'error' => $e->getMessage(),
                'message' => 'Thất bại',
                'statusCode' => 400,
                'data' => null,
            ], 400);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Lỗi khi thực hiện thống kê: ' . $e->getMessage(),
                'message' => 'Thất bại',
                'statusCode' => 500,
                'data' => null,
            ], 500);
        }
    }


    public function getScoreTop10(Request $request)
    {
        try {
            $code = $request->input('code');
            // $subjects = getSubjectsByBlock($code);

            $subjects = $this->getSubjectsByBlock($code);
            if (!$subjects) {
                throw new \InvalidArgumentException("Mã khối thi không hợp lệ: $code");
            }
            $stats = Point::getScoreTop10($subjects, 10);
            return response()->json([
                'message' => 'Thành công',
                'statusCode' => 200,
                'data' => $stats
            ]);
        } catch (\InvalidArgumentException $e) {
            return response()->json([
                'error' => $e->getMessage(),
                'message' => 'Thất bại',
                'statusCode' => 400,
                'data' => null,
            ], 400);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Lỗi khi thực hiện thống kê: ' . $e->getMessage(),
                'message' => 'Thất bại',
                'statusCode' => 500,
                'data' => null,
            ], 500);
        }
    }



    private function getSubjectsByBlock($blockCode)
    {
        $blocks = [
            'A00' => ['toan', 'vat_li', 'hoa_hoc'],
            'A01' => ['toan', 'vat_li', 'ngoai_ngu'],
            'A02' => ['toan', 'vat_li', 'sinh_hoc'],
            'B00' => ['toan', 'hoa_hoc', 'sinh_hoc'],
            'C00' => ['ngu_van', 'lich_su', 'dia_li'],
            'D01' => ['toan', 'ngu_van', 'ngoai_ngu'],
            'D07' => ['toan', 'Hóa', 'ngoai_ngu'],
            // Thêm các khối khác nếu cần
        ];

        return $blocks[$blockCode] ?? null; // null nếu không tìm thấy khối
    }
}
