import React from 'react'
import resources from '../constants/ResourcesConstants'
import Image from 'next/image'

function Resource() {
    return (
        <div>
            {resources.map(resource => {
                return (
                    <section>
                        <h2 className='text-[#A10035] font-medium text-3xl md:text-4xl text-center mt-4 font-averia p-5 bg-[#FFB5B5]'>{resource.resourceName}</h2>
                        <div className='md:flex gap-14 p-4'>
                            <Image src={resource.imgPath} alt={resource.resourceName} width={250} height={100}
                                className="rounded-lg m-auto" />
                            <div className='flex justify-center items-center p-4'>
                                <p className='text-xl lg:text-2xl text-[#3D0C11] text-justify font-itim'><a href={resource.url} className="underline text-[#BD4B4B]">{resource.resourceName}</a>{resource.description}</p>
                            </div>
                        </div>

                    </section>
                )
            })}
        </div>
    )
}

export default Resource