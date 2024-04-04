import React from 'react'
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

export default function ShowMore() {
  return (
    <div className=' flex m-auto flex-col w-36 h-18 justify-center rounded cursor-pointer font-bold'>
        <h1 className='self-center text-xl'>Show more</h1>
        <HiOutlineChevronDoubleDown className='m-2 size-8 self-center'/>
    </div>
  )
}
