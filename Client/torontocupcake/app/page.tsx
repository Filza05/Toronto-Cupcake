"use client"

import Link from "next/link";
import { useEffect, useState } from "react";

function page() {
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
    <div className="bg-[#FFD0D0]">
      <div className="flex justify-center items-center">
        <section className="w-screen lg:w-3/4 flex flex-col items-center justify-center py-6 bg-[#CA8787] rounded-t-lg shadow-md shadow-[#A87676]">
          <h1 className="text-[#FFD0D0] font-medium text-2xl cursor-default">{currentDate}</h1>
          <h2 className="text-[#FFD0D0] font-medium text-lg flex gap-4 cursor-default">Check out our new
            <Link className="underline text-[#F5EEE6] duration-300 hover:scale-110" href="/Corporate">Corporate event logo cupcakes</Link>
          </h2>
        </section>
      </div>
      <section className="flex flex-col lg:flex-row items-center bg-[#FFD0D0]">
        <img src="/assets/Cupcakes-Main.jpg" alt="Main Page Cupcakes Image" className="w-screen h-full rounded-none my-6 lg:rounded-full lg:w-1/2 lg:h-full" />

        <div className="flex flex-col gap-5 p-10 justify-center">
          <h1 className="text-[#D14D72] font-medium text-2xl">Make Your Tastebuds Happy!</h1>
          <p className="mb-3 text-lg text-[#A87676] md:text-xl">
            Welcome! Thank you for stopping by Toronto Cupcake. Canada's and the GTA's favourite stop for that special treat.
            Order cupcakes online 24/7 for your special event. Delivery avaialable most days between 8 and 6pm TO time.
            Cupcake delivery is available throughout Toronto, the GTA, and beyond. Cupcakes are delivered in our signature pink box.
          </p>
          <p className="text-[#A87676] text-md">
            Celebrating our 13th year of providing Canada's most delicious cupcakes for business meetings, birthdays, weddings,
            or for no other reason than because.

            Our cupcakes are baked daily using the finest ingredients.
          </p>
        </div>
      </section>
    </div>
  )
}

export default page