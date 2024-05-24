import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="bg-[#A87676] h-full">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-[#FFD0D0] sm:text-center">© 2024 <p className="hover:underline">FSSM™</p>. All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <Link href="/FAQS" className="hover:underline me-4 md:me-6 text-[#FFD0D0]">FAQs</Link>
            <Link href="/PrivayPolicy" className="hover:underline me-4 md:me-6 text-[#FFD0D0]">Privacy Policy</Link>
            <Link href="/Contact" className="hover:underline me-4 md:me-6 text-[#FFD0D0]">Contact Us</Link>
            <Link href="/Resources" className="hover:underline text-[#FFD0D0]">Resources</Link>
          </ul>
        </div>
      </footer>

    </div>
  )
}

export default Footer