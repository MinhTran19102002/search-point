'use client'
import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const GradePieChart = (prop: any) => {
    const { stats } = prop
    // Dữ liệu mẫu cho các thang điểm
    const [gradeData, setGradeData] = useState([
        { key: 'excellent', name: 'Xuất sắc (9.0-10.0)', value: 0, color: 'var(--color-yellow-400)' },
        { key: 'good', name: 'Khá (8.0-8.9)', value: 0, color: 'var(--color-green-400)' },
        { key: 'average', name: 'Xuất sắc (7.0-7.9)', value: 0, color: 'var(--color-blue-400)' },
        { key: 'poor', name: 'Cần cải thiện (6.0-6.9)', value: 0, color: 'var(--color-red-400)' },
    ]);
    const [totalStudents, setTotalStudents] = useState(0)



    // Custom tooltip
    const CustomTooltip = ({ active, payload }: any) => {
        if (active && payload && payload.length) {
            const data = payload[0];
            const percentage = ((data.value / totalStudents) * 100).toFixed(1);
            return (
                <div className="bg-white p-3 border border-gray-300 rounded-lg shadow-lg">
                    <p className="font-semibold text-gray-800">{data.name}</p>
                    <p className="text-blue-600">Số lượng: {data.value} học sinh</p>
                    <p className="text-green-600">Tỷ lệ: {percentage}%</p>
                </div>
            );
        }
        return null;
    };

    // Custom label
    const renderLabel = (entry: any) => {
        const percent = ((entry.value / totalStudents) * 100).toFixed(1);
        return `${percent}%`;
    };

    useEffect(() => {
        setGradeData([
            { key: 'excellent', name: 'Xuất sắc (8-10)', value: stats.excellent, color: 'var(--color-yellow-400)' },
            { key: 'good', name: 'Khá (6-7.9)', value: stats.good, color: 'var(--color-green-400)' },
            { key: 'average', name: 'Trung bình (4-5.9)', value: stats.average, color: 'var(--color-blue-400)' },
            { key: 'poor', name: 'Cần cải thiện (<4)', value: stats.poor, color: 'var(--color-red-400)' },
        ]);

        setTotalStudents(stats.total)
    }, [stats]);

    return (
        <div className='w-full h-full'>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={gradeData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        stroke="#fff"
                        strokeWidth={2}
                    >
                        {gradeData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default GradePieChart;