import React from 'react'

export default function ContactForm() {
    return (
        <div className='m-auto w-[50rem]'>
            <form action="">
                <div className='m-10'><a className='text-white block mb-2'>Name</a> <input type="text" className='bg-neutral-900 border border-neutral-700 w-[50vw] focus:shadow-lg text-neutral-700 focus:shadow-blue-500/50 p-2' placeholder='Enter Name' /></div>
                <div className='m-10'><a className='text-white block mb-2'>Email</a> <input type="text" className='bg-neutral-900 border border-neutral-700 w-[50vw] focus:shadow-lg text-neutral-700 focus:shadow-blue-500/50 p-2' placeholder='Enter Email' /></div>
                <div className='m-10'><a className='text-white block mb-2'>Comments</a> <textarea cols={6} rows={9} type="text" className='bg-neutral-900 border border-neutral-700 w-[50vw] focus:shadow-lg text-neutral-700 focus:shadow-blue-500/50 focus:border-blue-500/50' placeholder='Enter your Message...' /></div>
            </form>
        </div>
    )
}
