import React from 'react'
import Report from '../components/Report'

export default function Reports() {
    return (
        <div>
            <h1 className='text-center text-5xl m-4 font-bold'>Reports</h1>
            <div className='grid grid-cols-4 gap-2 grid-flow m-auto my-5'>
                <Report />
                <Report />
                <Report />
                <Report />
                <Report />
                <Report />
                <Report />
                <Report />
            </div>
        </div>
    )
}
