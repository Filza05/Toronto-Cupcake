
import Link from "next/link";
import { useEffect, useState } from "react";

function page() {

  return (
    <div className="bg-[#FFD0D0]">

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