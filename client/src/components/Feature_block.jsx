import React from 'react'
import Features from './Features'

export default function Feature_block() {
    return (
        <div className='m-4'>
            <Features orient={true} feature={1} />

            <Features orient={false} feature={2} />

            <Features orient={true} feature={3} />

        </div>
    )
}
