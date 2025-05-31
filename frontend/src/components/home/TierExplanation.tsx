
'use client'

import { AlertCircle, Star, TrendingUp, Trophy } from "lucide-react";

const TierExplanation = () => {

    return (
        <div className="">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tiêu chí đánh giá</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-lg bg-yellow-50 border border-yellow-200">
                    <div className="flex items-center mb-2">
                        <Trophy className="h-5 w-5 text-yellow-600 mr-2" />
                        <span className="font-medium text-yellow-800">Xuất sắc</span>
                    </div>
                    <p className="text-sm text-yellow-700">≥ 8.0 điểm</p>
                    <p className="text-xs text-yellow-600 mt-1">Hiệu suất vượt trội, đạt tiêu chuẩn cao nhất</p>
                </div>

                <div className="p-4 rounded-lg bg-green-50 border border-green-200">
                    <div className="flex items-center mb-2">
                        <Star className="h-5 w-5 text-green-600 mr-2" />
                        <span className="font-medium text-green-800">Khá</span>
                    </div>
                    <p className="text-sm text-green-700">6.0 - 7.9 điểm</p>
                    <p className="text-xs text-green-600 mt-1">Hiệu suất tốt, đáp ứng yêu cầu</p>
                </div>

                <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
                    <div className="flex items-center mb-2">
                        <TrendingUp className="h-5 w-5 text-blue-600 mr-2" />
                        <span className="font-medium text-blue-800">Trung bình</span>
                    </div>
                    <p className="text-sm text-blue-700">4.0 - 5.9 điểm</p>
                    <p className="text-xs text-blue-600 mt-1">Hiệu suất chấp nhận được, có thể cải thiện</p>
                </div>

                <div className="p-4 rounded-lg bg-red-50 border border-red-200">
                    <div className="flex items-center mb-2">
                        <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
                        <span className="font-medium text-red-800">Cần cải thiện</span>
                    </div>
                    <p className="text-sm text-red-700">&lt; 4.0 điểm</p>
                    <p className="text-xs text-red-600 mt-1">Cần hỗ trợ và cải thiện đáng kể</p>
                </div>
            </div>
        </div>
    )

}

export default TierExplanation;