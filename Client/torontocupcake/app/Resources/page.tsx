import Resource from '@/components/Resource'
import Image from 'next/image'
import React from 'react'

function page() {
    return (
        <div>
            <main className='h-fit w-full p-10 bg-[#FFD0D0]'>
                <section className='p-8'>
                    <h1 className='font-lobster text-center my-8 text-3xl md:text-4xl text-[#D14D72]'>Resources for Weddings Engagements, Birthdays and People we want to Thank</h1>
                </section>

                <section className='max-w-[800px] flex justify-center items-center m-auto mb-10'>
                    <section className='p-5 flex flex-col gap-5 bg-[#FFCCCC] rounded-3xl'>
                        <h2 className='text-[#A10035] font-medium text-3xl md:text-4xl text-center mt-4 font-averia'>External Resources</h2>
                        <p className='text-xl md:text-2xl text-[#3D0C11] text-justify px-10 md:px-32 font-itim'>
                            If you need more help in planning or ideas try clicking on one of the links to the right.
                            You will be taken to one of our friends' sites.
                        </p>

                        <p className='text-xl md:text-2xl text-[#3D0C11] text-justify px-10 md:px-32 font-itim'>   
                            We have either used their services, bought their products or have had customers tell us about
                            them and what a wonderful experience they have had.
                        </p>

                        <p className='text-xl md:text-2xl text-[#3D0C11] text-justify px-10 md:px-32 font-itim'>    
                            Before you go don't forget to buy a bunch of cupcakes!
                        </p>
                    </section>
                </section>

                <hr className='border-b-8 border-[#FFDDCC] rounded-3xl w-3/4 m-auto'></hr>

                <section className='mt-10 max-w-[1000px] m-auto bg-[#FFCCCC]'>
                    <Resource />
                </section>

            </main>
        </div>
    )
}

export default page