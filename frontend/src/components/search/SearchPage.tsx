'use client';

import { useState } from 'react';
import SearchPoint from './SearchPoint';
import DetailedScores from './DetailedScores';

const SearchPage = () => {
    const [point, setPoint] = useState<IPoint | null>(null);
    const [loading, setLoading] = useState(false);

    return (
        <main className=" bg-gray-50 p-4 flex flex-col items-center ">
            <div className="w-full sm:w-[500px] lg:w-[500px] flex flex-col items-center gap-2">
                <SearchPoint
                    onSendData={(data: IPoint) => setPoint(data)}
                    onLoading={(data: boolean) => setLoading(data)}
                />
                <DetailedScores point={point} loading={loading} />
            </div>

        </main>
    );
}
export default SearchPage