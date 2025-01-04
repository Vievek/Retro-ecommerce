import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <div className="bg-green-700 p-10 px-28 lg:px-36">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-20">
        <div>
          <h2 className="font-extrabold text-5xl text-white">
            Speed Up your Creative workflow
          </h2>
          <p className=" text-gray-200 ">
            join a growing family of 43,436 designers,creator and makers from
            around the world
          </p>
        </div>
        <div className=" flex justify-center items-center">
          <Image src={'vercel.svg'} width={300} height={300} />
        </div>
      </div>
    </div>
  )
}

export default Hero
