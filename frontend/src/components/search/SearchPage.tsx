'use client';

import { useState } from 'react';
import SearchPoint from './SearchPoint';
import DetailedScores from './DetailedScores';

const SearchPage = () => {
    const [point, setPoint] = useState<IPoint | null>(null);
    const [loading, setLoading] = useState(false);

    return (
        <main className=" bg-gray-50 p-6 flex flex-col items-center ">
            <div className='flex flex-col items-center w-6/12'>
                <SearchPoint
                    onSendData={(data: IPoint) => { setPoint(data) }}
                    onLoading={(data: boolean) => { setLoading(data) }} />
                <DetailedScores point={point} loading={loading} />
            </div>
        </main>
    );
}
export default SearchPage