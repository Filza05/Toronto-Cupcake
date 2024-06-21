import React from "react";

const ProductCard = () => {
  return (
    <div className="flex flex-col justify-center items-center font-averia rounded-t-full">
      <div className="shadow-md hover:scale-105 hover:shadow-xl duration-300 hover:shadow-[#3D0C11] rounded-t-full">
        <a href="#">
          {/* on click, productpopupmodal will show up with details */}
          <img
            src="https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Product image"
            className="h-80 w-72 object-cover  rounded-t-full"
          />
        </a>
        <div className="px-4 py-3 w-72">
          <span className="text-[#3D0C11] mr-3 uppercase text-sm">Description</span>
          <p className="text-lg font-bold text-[#3D0C11] truncate block capitalize">
            Product Name
          </p>
          <div className="flex items-center">
            <p className="text-lg font-semibold text-[#3D0C11] cursor-auto my-3">
              Price
            </p>
            <div className="ml-auto">
              <a href="#">
                <button className="rounded-tl-3xl rounded-bl-3xl text-white font-medium text-lg bg-[#D14D72] group border-2 px-6 py-2 my-2 flex justify-between gap-2 items-center hover:bg-[#c9c8aa] hover:text-[#3D0C11] hover:border-[#3D0C11] active:bg-white">
                  Add To Cart
                  <svg className="w-8 h-8 text-white dark:text-white group-hover:text-[#3D0C11]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4" />
                  </svg>

                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;