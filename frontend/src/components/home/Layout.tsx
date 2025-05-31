'use client'
import { useState, useEffect } from 'react';
import { Trophy, Star, TrendingUp, AlertCircle, Users, BarChart3, Settings, Download, ChevronDown, BookOpen } from 'lucide-react';
import GradePieChart from './GradePieChart ';
import SubjectFilter from './SubjectFilter';
import StatsCard from './StatsCard';
import TierExplanation from './TierExplanation';
import { getPoint, getStats } from '@/utils/action/point.action';



const DashboardLayout = () => {
    const [selectedSubject, setSelectedSubject] = useState<string>('toan');
    const [stats, setStats] = useState<IStats>({
        excellent: 0,
        good: 0,
        average: 0,
        poor: 0,
        total: 0,
    })

    const getData = async () => {

        try {
            const res = await getStats(selectedSubject)

            if (res?.error) {
                // 
                return
            }
            if (res?.data) {
                // return res?.data?.data
                setStats(res?.data)
            }
        } catch (error) {
        }
    }

    // Mock data
    useEffect(() => {
        getData()
    }, [selectedSubject]);

    return (
        <div className=" bg-gray-50 ">
            <div className="max-w-7xl mx-auto flex flex-col gap-2">
                {/* Header */}
                <div className="">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
                </div>
                <div className="flex flex-row bg-white rounded-xl shadow-sm p-6">
                    <div className="basis-2/3">
                        {/* Subject Filter */}
                        <SubjectFilter onSetData={(data: string) => { setSelectedSubject(data) }} selectedSubject={selectedSubject} />

                        {/* Stats Cards */}
                        <StatsCard stats={stats} /></div>
                    <div className="basis-1/3">
                        {/* biểu đồ tròn */}
                        <GradePieChart stats={stats} />
                    </div>
                </div>
                {/* Tier Explanation */}
                <div className=" bg-white rounded-xl shadow-sm p-6">
                    <TierExplanation />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;