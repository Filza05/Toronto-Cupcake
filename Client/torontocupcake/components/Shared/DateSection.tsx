"use client"


import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function DateSection() {
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        const today = new Date();
        const formattedDate = today.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        setCurrentDate(formattedDate);
    }, []);

    return (
        <div className="flex justify-center items-center">
            <section className="w-screen lg:w-3/4 flex flex-col items-center justify-center py-6 bg-[#CA8787] rounded-t-lg shadow-md shadow-[#A87676] font-fredoka">
                <h1 className="text-[#FFDDCC] font-medium text-2xl cursor-default font-Gluten">{currentDate}</h1>
                <h2 className="text-[#FFDDCC] font-medium text-lg flex gap-4 cursor-default font-Luxurious">Check out our new
                    <Link className="underline text-[#F5EEE6] duration-300 hover:scale-110" href="/Corporate">Corporate event logo cupcakes</Link>
                </h2>
            </section>
        </div>
    )
}

export default DateSection