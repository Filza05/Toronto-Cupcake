"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image';
import { motion } from "framer-motion"
import ScrollProgress from './ScrollProgress';
import { usePathname } from 'next/navigation';

function Navbar() {
    const [menubtn, setMenuBtn] = useState(false);
    const pathname = usePathname();

    function handleClick() {
        setMenuBtn(!menubtn);
    }

    const getLinkClass = (path: string) => (
        pathname === path ? 'text-[#3D0C11] scale-[1.1]' : 'text-[#A87676] hover:text-[#3D0C11] duration-500'
    );

    return (
        <>
        <ScrollProgress />
        <nav className='bg-[#FFD0D0] z-10 px-14 py-6 h-fit flex justify-between items-center'>
            <Link href='/' className='flex items-center gap-4 text-[#A87676]'>
                <Image src='/assets/Logo.png' alt='Logo' width={80} height={80} />
                <h1 className='font-bold text-[#A87676] text-4xl font-Satisfy'>Toronto Cupcake</h1>
            </Link>

            {/*menu*/}
            <ul className='hidden lg:flex gap-5 font-averia'>
                <li className={`text-2xl font-medium ${getLinkClass('/')}`}>
                    <Link href="/">
                        <motion.div whileHover={{ scale: 1.2 }}>
                            Home
                        </motion.div>
                    </Link>
                </li>
                <li className={`text-2xl font-medium ${getLinkClass('/Cupcakes')}`}>
                    <Link href="/Cupcakes">
                        <motion.div whileHover={{ scale: 1.2 }}>
                            Cupcakes
                        </motion.div>
                    </Link>
                </li>
                <li className={`text-2xl font-medium ${getLinkClass('/About')}`}>
                    <Link href="/About">
                        <motion.div whileHover={{ scale: 1.2 }}>
                            About
                        </motion.div>
                    </Link>
                </li>
                <li className={`text-2xl font-medium ${getLinkClass('/Occasions')}`}>
                    <Link href="/Occasions">
                        <motion.div whileHover={{ scale: 1.2 }}>
                            Occasions
                        </motion.div>
                    </Link>
                </li>
                <li>
                    <Link href="/Cart" className={`flex flex-col items-center ${getLinkClass('/Cart')}`}>
                        <motion.div whileHover={{ scale: 1.2 }}>
                            <svg className='w-10 h-10 text-2xl font-medium' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
                            </svg>
                        </motion.div>
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
                        <motion.div whileHover={{ scale: 1.2 }}>
                            Home
                        </motion.div>
                    </Link>
                </li>
                <li className='py-6 text-4xl hover:text-pink-600 duration-700'>
                    <Link onClick={handleClick} href="/Cupcakes">
                        <motion.div whileHover={{ scale: 1.2 }}>
                            Cupcakes
                        </motion.div>
                    </Link>
                </li>
                <li className='py-6 text-4xl hover:text-pink-600 duration-700'>
                    <Link onClick={handleClick} href="/About">
                        <motion.div whileHover={{ scale: 1.2 }}>
                            About
                        </motion.div>
                    </Link>
                </li>
                <li className='py-6 text-4xl hover:text-pink-600 duration-700'>
                    <Link onClick={handleClick} href="/Occasions">
                        <motion.div whileHover={{ scale: 1.2 }}>
                            Occasions
                        </motion.div>
                    </Link>
                </li>
                <li>
                    <motion.div whileHover={{ scale: 1.2 }}>
                        <Link href="/Cart" className='flex gap-2 items-center group'>
                            <svg className='w-10 h-10 text-2xl font-medium group-hover:text-pink-600 duration-500 ' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
                            </svg>
                            <p className='py-6 text-2xl font-medium group-hover:text-pink-600 duration-700'>View Cart</p>
                        </Link>
                    </motion.div>
                </li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar
