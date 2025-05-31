'use client'

import { SyncLoader } from "react-spinners";

interface Props {
    point: IPoint | null;
    loading: boolean
}

const DetailedScores = (props: Props) => {
    const { point, loading } = props

    return (
        <div className="relative bg-white shadow-md rounded-lg p-6 w-full">
            <h2 className="text-xl font-semibold mb-2">Detailed Scores</h2>

            {loading && (
                <div className="absolute inset-0 bg-white/40  flex items-center justify-center z-10 ">

                    {/* absolute inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center z-10 */}
                    <SyncLoader color="#001529" size={20} />
                </div>
            )}

            <div className={loading ? "" : ""}>
                {point ? (
                    <div>
                        <div>SBD: {point.sbd}</div>
                        <div className="flex justify-between">
                            <div>Toán: {point.toan}</div>
                            <div>Ngữ Văn: {point.ngu_van}</div>
                            <div>Tiếng Anh: {point.ngoai_ngu}</div>
                        </div>
                        <div className="flex justify-between">
                            <div>Vật lý: {point.vat_li}</div>
                            <div>Hóa học: {point.hoa_hoc}</div>
                            <div>Sinh học: {point.sinh_hoc}</div>
                        </div>
                        <div className="flex justify-between">
                            <div>Lịch sử: {point.lich_su}</div>
                            <div>Địa lý: {point.dia_li}</div>
                            <div>Giáo dục công dân: {point.gdcd}</div>
                        </div>
                        <div>Mã ngoại ngữ: {point.ma_ngoai_ngu}</div>
                    </div>
                ) : (
                    <div className="text-gray-500">Detailed view of search scores here!</div>
                )}
            </div>
        </div>

    );
}


export default DetailedScores;