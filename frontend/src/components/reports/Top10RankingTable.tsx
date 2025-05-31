import React, { useState, useEffect } from 'react';
import { ChevronDown, Trophy, Medal, Award } from 'lucide-react';
import { getTop10 } from '@/utils/action/point.action';

const Top10RankingTable = () => {
    const [selectedBlock, setSelectedBlock] = useState('A00');
    const [data, setData] = useState<IPoint[]>([]);
    const [loading, setLoading] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Danh sách các khối thi
    const examBlocks = [
        { code: 'A00', name: 'Khối A00 (Toán, Lý, Hóa)' },
        { code: 'A01', name: 'Khối A01 (Toán, Lý, Anh)' },
        { code: 'A02', name: 'Khối A01 (Toán, Lý, Sinh)' },
        { code: 'B00', name: 'Khối B00 (Toán, Hóa, Sinh)' },
        { code: 'C00', name: 'Khối C00 (Văn, Sử, Địa)' },
        { code: 'D01', name: 'Khối D01 (Văn, Toán, Anh)' },
        { code: 'D07', name: 'Khối D07 (Toán, Hóa, Anh)' }
    ];

    // Hàm gọi API (thay thế bằng API thực của bạn)
    const fetchTopStudents = async (blockCode: any) => {
        setLoading(true);
        try {
            const res = await getTop10(blockCode);
            if (res?.error) {
                // 
                return
            }
            if (res?.data) {
                // return res?.data?.data
                setData(res?.data);
            }
        } catch (error) {
            console.error('Lỗi khi tải dữ liệu:', error);
        } finally {
            setLoading(false);
        }
    };

    // Gọi API khi component mount hoặc khi thay đổi khối
    useEffect(() => {
        fetchTopStudents(selectedBlock);
    }, [selectedBlock]);

    // Hàm xử lý thay đổi khối thi
    const handleBlockChange = (blockCode: any) => {
        setSelectedBlock(blockCode);
        setIsDropdownOpen(false);
    };

    // Hàm lấy icon theo thứ hạng
    const getRankIcon = (rank: any) => {
        switch (rank) {
            case 1: return <Trophy className="w-5 h-5 text-yellow-500" />;
            case 2: return <Medal className="w-5 h-5 text-gray-400" />;
            case 3: return <Award className="w-5 h-5 text-amber-600" />;
            default: return <span className="w-5 h-5 flex items-center justify-center text-sm font-bold text-gray-600">{rank}</span>;
        }
    };

    // Hàm lấy class CSS theo thứ hạng
    const getRankRowClass = (rank: any) => {
        switch (rank) {
            case 1: return 'bg-gradient-to-r from-yellow-50 to-yellow-100 border-l-4 border-yellow-400';
            case 2: return 'bg-gradient-to-r from-gray-50 to-gray-100 border-l-4 border-gray-400';
            case 3: return 'bg-gradient-to-r from-amber-50 to-amber-100 border-l-4 border-amber-600';
            default: return 'bg-white hover:bg-gray-50';
        }
    };

    return (
        <div className="w-full mx-auto p-6 bg-gray-50 flex flex-col justify-center items-center ">
            {/* Header */}
            <div className="mb-8 text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-2">
                    🏆 Top 10 Thí Sinh Cao Điểm Nhất
                </h1>
                <p className="text-gray-600 text-lg">Xếp hạng theo từng khối thi THPT Quốc Gia</p>
            </div>

            {/* Dropdown chọn khối */}
            <div className="mb-6 flex justify-center">
                <div className="relative">
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="flex items-center gap-3 px-6 py-3 bg-white border-2 border-blue-200 rounded-xl hover:border-blue-400 transition-colors shadow-sm min-w-80"
                    >
                        <span className="font-medium text-gray-700">
                            {examBlocks.find(block => block.code === selectedBlock)?.name}
                        </span>
                        <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isDropdownOpen && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-10">
                            {examBlocks.map((block) => (
                                <button
                                    key={block.code}
                                    onClick={() => handleBlockChange(block.code)}
                                    className={`w-full px-6 py-3 text-left hover:bg-blue-50 transition-colors first:rounded-t-xl last:rounded-b-xl ${selectedBlock === block.code ? 'bg-blue-100 text-blue-700 font-medium' : 'text-gray-700'
                                        }`}
                                >
                                    {block.name}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Bảng xếp hạng */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-2xl sm:max-w-2xl md:max-w-2xl lg:max-w-3xl xl:max-w-6xl mx-auto">

                {loading ? (
                    <div className="flex items-center justify-center py-12">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                        <span className="ml-3 text-gray-600 font-medium">Đang tải dữ liệu...</span>
                    </div>
                ) : (
                    <div className="overflow-x-auto relative">
                        <table className="w-full">
                            <thead className="bg-gradient-to-r from-blue-600 to-blue-700 text-white ">
                                <tr className='relative'>
                                    <th className="px-6 py-4 text-left font-semibold">Hạng</th>
                                    <th className="px-6 py-4 text-left font-semibold">SBD</th>
                                    <th className="px-6 py-4 text-center font-semibold">Toán</th>
                                    <th className="px-6 py-4 text-center font-semibold">Ngữ Văn</th>
                                    <th className="px-6 py-4 text-center font-semibold">Ngoại Ngữ</th>
                                    <th className="px-6 py-4 text-center font-semibold">Vật Lí</th>
                                    <th className="px-6 py-4 text-center font-semibold">Hóa Học</th>
                                    <th className="px-6 py-4 text-center font-semibold">Sinh Học</th>
                                    <th className="px-6 py-4 text-center font-semibold">Lịch Sử</th>
                                    <th className="px-6 py-4 text-center font-semibold">Địa Lí</th>
                                    <th className="px-6 py-4 text-center font-semibold">GDCD</th>
                                    <th className="sticky right-0 z-0 px-6 py-4 text-center font-semibold bg-gradient-to-r from-orange-500 to-red-500">
                                        Tổng Điểm
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((student, index) => (
                                    <tr
                                        key={student.sbd}
                                        className={`${getRankRowClass(index + 1)} transition-all duration-200 relative`}
                                    >
                                        <td className="px-6 py-4 font-medium">
                                            <div className="flex items-center gap-2">
                                                {getRankIcon(index + 1)}
                                                <span className="text-lg font-bold text-gray-700">#{index + 1}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 font-mono text-blue-600 font-semibold">{student.sbd}</td>
                                        <td className="px-6 py-4 text-center font-semibold">{student.toan}</td>
                                        <td className="px-6 py-4 text-center font-semibold">{student.ngu_van}</td>
                                        <td className="px-6 py-4 text-center font-semibold">{student.ngoai_ngu}</td>
                                        <td className="px-6 py-4 text-center font-semibold">{student.vat_li}</td>
                                        <td className="px-6 py-4 text-center font-semibold">{student.hoa_hoc}</td>
                                        <td className="px-6 py-4 text-center font-semibold">{student.sinh_hoc}</td>
                                        <td className="px-6 py-4 text-center font-semibold">{student.lich_su}</td>
                                        <td className="px-6 py-4 text-center font-semibold">{student.dia_li}</td>
                                        <td className="px-6 py-4 text-center font-semibold">{student.gdcd}</td>
                                        <td className="px-6 py-4 text-center sticky right-0 z-1">
                                            <span className=" bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full font-bold text-lg">
                                                {student.tong_diem}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {/* Footer thông tin */}
            <div className="mt-8 text-center text-gray-500 text-sm">
                <p>Dữ liệu được cập nhật theo thời gian thực • Khối hiện tại: <span className="font-semibold text-blue-600">{selectedBlock}</span></p>
            </div>
        </div>
    );
};

export default Top10RankingTable;