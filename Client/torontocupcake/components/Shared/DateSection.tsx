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
        <div className="flex justify-center items-center mt-40">
            <section className="w-screen lg:w-3/4 flex flex-col items-center justify-center py-6 rounded-t-lg shadow-md shadow-[#84af9b] font-fredoka">
                <h1 className="text-[#3D0C11] font-medium text-2xl cursor-default font-Gluten">📅 {currentDate}</h1>
                <h2 className="text-[#3D0C11] font-medium text-lg flex gap-4 cursor-default font-Luxurious">Check out our new
                    <Link className="underline text-[#A87676] duration-100 hover:scale-[1.06]" href="/Corporate">Corporate event logo cupcakes</Link>
                </h2>
            </section>
        </div>
    )
}

export default DateSection