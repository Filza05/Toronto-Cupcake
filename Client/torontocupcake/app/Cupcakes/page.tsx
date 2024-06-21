import ProductCard from '@/components/ProductCard'
import SearchBar from '@/components/SearchBar'
import BackToTop from '@/components/Shared/BackToTop'
import React from 'react'

function page() {
  return (
    <div>
      <div className="text-center p-10 font-averia">
        <h1 className="font-bold text-4xl mb-4">Delight in Every Bite </h1>
        <h1 className="text-3xl">Discover Our Gourmet Cupcakes</h1>
      </div>

      <SearchBar />

      <section id="Products"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-20">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </section>

      <BackToTop />
    </div>
  )
}

export default page