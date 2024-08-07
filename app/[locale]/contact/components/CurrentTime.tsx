'use client'

// components/CurrentTime.tsx
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';
import { toZonedTime } from 'date-fns-tz';

interface CurrentTimeProps {
    timeZone: string;
}

const CurrentTime: React.FC<CurrentTimeProps> = ({ timeZone }) => {
    const [time, setTime] = useState<string>('');

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const zonedDate = toZonedTime(now, timeZone);
            const formattedTime = format(zonedDate, 'hh:mm a', { locale: enUS }); // 12-hour format with AM/PM
            setTime(formattedTime);
        }, 1000);

        return () => clearInterval(interval);
    }, [timeZone]);

    return (
        <div className=' text-center'>
            <p className='text-5xl font-extrabold'>{time}</p>
            <h2 className='text-xs text-textGray'>Reynosa, Tamps, México</h2>
        </div>
    );
};

export default CurrentTime;
