'use client'
import React, { useState, useEffect } from 'react';
import { Trophy, Medal, Award, Calculator, Zap, FlaskConical, Search, Filter } from 'lucide-react';
import Top10RankingTable from './Top10RankingTable';

const ReportPage = () => {
    return (
        <div className="w-full flex flex-col items-center gap-2">
            <Top10RankingTable />
        </div>

    )
};

export default ReportPage;