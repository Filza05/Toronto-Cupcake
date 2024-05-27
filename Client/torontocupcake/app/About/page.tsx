import React from 'react'
import Image from 'next/image'

function page() {
  return (
    <div className='bg-[#FFD0D0] flex justify-center items-center'>
      <main className='max-w-[850px]'>
        <section className='p-5 my-10 flex flex-col gap-10 bg-[#FFCCCC] rounded-3xl'>
          <h1 className='text-[#A10035] font-medium text-4xl text-center mt-4 font-averia'>About Toronto Cupcake</h1>
          <p className='text-2xl text-[#3D0C11] text-justify py-4 px-10 md:px-32 font-itim'>
            We are driven by loving what we do and what we make everyday.
            We get to use the finest ingredients to make what we believe are
            the tastiest treats around. And.. we love the idea that our treats
            are making people happy every time they bite into one. How much
            fun is that!</p>
        </section>

        <hr className='border-b-8 border-[#FFDDCC] rounded-3xl'></hr>

        <section className='p-5 flex flex-col gap-10 my-10 bg-[#FFCCCC] rounded-3xl'>
          <h1 className='text-[#A10035] font-medium text-4xl text-center mt-4 font-averia'>About Michelle</h1>
          <div className='flex justify-center items-center'>
            <Image src="/assets/Michelle.jpg" width={500} height={500} alt={'Owner of Toronto Cupcakes'}
              className='rounded-tl-[200px] rounded-br-[200px] shadow-lg shadow-[#342B38]' />
          </div>
          <p className='text-2xl text-[#3D0C11] text-justify py-4 px-10 md:px-32 font-itim'>
            Toronto Cupcake was created by Michelle Harrison so she could pursue her love of baking.
            A lifelong baker, inspired by her mother, Michelle opened Toronto Cupcake in August 2010
            as one of Canada's first gourmet cupcakeries.</p>
        </section>
      </main>
    </div>
  )
}

export default page