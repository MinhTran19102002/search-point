'use client'

import { AlertCircle, Star, TrendingUp, Trophy } from "lucide-react";

const StatsCard = (prop: any) => {
    const { stats } = prop

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-yellow-400">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-gray-600">Xuất sắc <br /> (≥8)</p>
                        <p className="text-2xl font-bold text-yellow-600">{stats.excellent}</p>
                    </div>
                    <Trophy className="h-8 w-8 text-yellow-500" />
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-green-400">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-gray-600">Khá <br /> (6-7.9)</p>
                        <p className="text-2xl font-bold text-green-600">{stats.good}</p>
                    </div>
                    <Star className="h-8 w-8 text-green-500" />
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-blue-400">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-gray-600">Trung bình <br /> (4-5.9)</p>
                        <p className="text-2xl font-bold text-blue-600">{stats.average}</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-blue-500" />
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-red-400">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-gray-600">Cần cải thiện<br /> (&lt;4)</p>
                        <p className="text-2xl font-bold text-red-600">{stats.poor}</p>
                    </div>
                    <AlertCircle className="h-8 w-8 text-red-500" />
                </div>
            </div>
        </div>
    )
}

export default StatsCard;