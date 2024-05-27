"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image';

function Navbar() {
    const [menubtn, setMenuBtn] = useState(false);

    function handleClick() {
        setMenuBtn(!menubtn);
    }

    return (
        <nav className='bg-[#FFD0D0] z-10 px-14 py-6 h-fit flex justify-between items-center'>
            <Link href='/' className='flex items-center gap-4 text-[#A87676]'>
                <Image src='/assets/Logo.png' alt='Logo' width={80} height={80} />
                <h1 className='font-bold text-[#A87676] text-4xl font-Satisfy'>Toronto Cupcake</h1>
            </Link>

            {/*menu*/}
            <ul className='hidden lg:flex gap-5 font-averia'>
                <li className='text-[#A87676] hover:text-[#E1ACAC] duration-500 text-2xl font-medium'>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li className='text-[#A87676] hover:text-[#E1ACAC] duration-500 text-2xl font-medium'>
                    <Link href="/Cupcakes">
                        Cupcakes
                    </Link>
                </li>
                <li className='text-[#A87676] hover:text-[#E1ACAC] duration-500 text-2xl font-medium'>
                    <Link href="/About">
                        About
                    </Link>
                </li>
                <li className='text-[#A87676] hover:text-[#E1ACAC] duration-500 text-2xl font-medium'>
                    <Link href="/Occasions">
                        Occasions
                    </Link>
                </li>
                <li>
                    <Link href="/Cart" className='flex flex-col items-center'>
                        <svg className='w-10 h-10 text-[#A87676] text-2xl font-medium hover:text-[#E1ACAC] duration-500 ' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
                        </svg>
                    </Link>
                </li>
            </ul>


            {/*Hamburger*/}
            <div className={`lg:hidden z-20 fixed right-0 mr-6 ${menubtn ? 'fixed' : 'sticky'}`} onClick={handleClick}>
                {menubtn ? <svg className="w-10 h-10 text-gray-800 hover:cursor-pointer hover:scale-75 hover:duration-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                </svg>
                    : <svg className="w-10 h-10 text-gray-800 hover:cursor-pointer hover:scale-75 hover:duration-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" />
                    </svg>
                }
            </div>

            {/*mobileMenu*/}
            <ul className={menubtn ? 'fixed font-averia top-0 left-0 z-10 w-screen duration-500 h-screen bg-[#E1ACAC] flex flex-col justify-center items-center' : 'hidden'}>
                <Link href='/' className='flex items-center gap-4'>
                    <Image src='/assets/Logo.png' alt='Logo' width={80} height={80} />
                    <p className='font-bold text-4xl font-Satisfy'>Toronto Cupcake</p>
                </Link>
                <li className='py-6 text-4xl hover:text-pink-600 duration-700'>
                    <Link onClick={handleClick} href="/">
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl hover:text-pink-600 duration-700'>
                    <Link onClick={handleClick} href="/Cupcakes">
                        Cupcakes
                    </Link>
                </li>
                <li className='py-6 text-4xl hover:text-pink-600 duration-700'>
                    <Link onClick={handleClick} href="/About">
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl hover:text-pink-600 duration-700'>
                    <Link onClick={handleClick} href="/Occasions">
                        Occasions
                    </Link>
                </li>
                <li>
                    <Link href="/Cart" className='flex gap-2 items-center group'>
                        <svg className='w-10 h-10 text-2xl font-medium group-hover:text-pink-600 duration-500 ' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
                        </svg>
                        <p className='py-6 text-2xl font-medium group-hover:text-pink-600 duration-700'>View Cart</p>
                    </Link>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar