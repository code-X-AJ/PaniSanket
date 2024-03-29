import React from 'react'
import Report from '../components/Report'

export default function Reports() {
    return (
        <div className='grid grid-cols-4 gap-2 grid-flow-row'>
            <Report />
            <Report />
            <Report />
            <Report />
        </div>
    )
}
