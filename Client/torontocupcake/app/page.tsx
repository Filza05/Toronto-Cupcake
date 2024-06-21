"use client"

import About from '@/components/About'
import ContactUs from '@/components/ContactUs'
import BackToTop from '@/components/Shared/BackToTop'
import { Link as ScrollLink } from 'react-scroll'

import Link from 'next/link'
function page() {

  return (
    <div>
      <section className="flex flex-col lg:flex-row items-center lg:p-10 md:p-0">
        <img src="/assets/Cupcakes-Main.jpg" alt="Main Page Cupcakes Image" className="w-screen h-full rounded-none my-6 lg:rounded-full lg:w-1/2 lg:h-full" />

        <div className="flex flex-col gap-5 p-10 justify-center">
          <h1 className="text-[#D14D72] font-medium lg:text-4xl text-3xl font-lobster animate-bounce">Make Your Tastebuds Happy! 😃</h1>
          <p className="mb-3 text-xl text-[#3D0C11] md:text-2xl font-itim">
            Welcome! Thank you for stopping by Toronto Cupcake. Canada's and the GTA's favourite stop for that special treat.
            Order cupcakes online 24/7 for your special event. Delivery avaialable most days between 8 and 6pm TO time.
            Cupcake delivery is available throughout Toronto, the GTA, and beyond. Cupcakes are delivered in our signature pink box.
          </p>
          <p className="text-[#715151] text-lg md:text-xl font-itim">
            Celebrating our 13th year of providing Canada's most delicious cupcakes for business meetings, birthdays, weddings,
            or for no other reason than because.

            Our cupcakes are baked daily using the finest ingredients. 🎀💝
          </p>

          <div className='font-marcellus text-xl flex gap-5'>
            <Link href="/Cupcakes">
              <button className='text-white font-medium bg-[#D14D72] group border-2 px-6 py-3 my-2 flex justify-between gap-2 items-center hover:bg-[#c9c8aa] hover:text-[#3D0C11] hover:border-[#3D0C11] active:bg-white'>
                Our Cupcakes
                <span className='group-hover:-rotate-90 duration-300'>
                  <svg className="w-6 h-6 text-white group-hover:text-[#3D0C11]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M3 4a1 1 0 0 0-.822 1.57L6.632 12l-4.454 6.43A1 1 0 0 0 3 20h13.153a1 1 0 0 0 .822-.43l4.847-7a1 1 0 0 0 0-1.14l-4.847-7a1 1 0 0 0-.822-.43H3Z" clipRule="evenodd" />
                  </svg>
                </span>
              </button>
            </Link>

            <button className='text-[#3D0C11] border-[#3D0C11] font-medium bg-[#c9c8aa] group border-2 px-6 py-3 my-2 flex justify-between gap-2 items-center hover:bg-[#D14D72] hover:text-white hover:border-white active:bg-[#3D0C11]'>
            <ScrollLink to="contact-us" smooth={true} duration={800}>
              Contact Us
              </ScrollLink>
              <span className='group-hover:rotate-90 duration-300'>
                <svg className="w-6 h-6 text-[#3D0C11] group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
                </svg>
              </span>
            </button>

          </div>
        </div>
      </section >

      <About />
      <ContactUs />
      <BackToTop />

    </div >
  )
}

export default page