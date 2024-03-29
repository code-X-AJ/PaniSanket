import React from 'react'
import future_Plans from '../assets/future_plans.jpg'

export default function futurePlans() {
    return (
        <div>
            <div>
                <h1 className='text-6xl text-center font-bold'>Our plans or Future plan</h1>
                <h2 className='text-2xl m-3 text-center'>bwef,baig fl.ahga3l.fhhf.</h2>
            </div>

            <div className='sm:flex justify-between'>
                <ul className='m-5'>
                    <li className='text-4xl'>bewls</li>
                    <li className='text-4xl'>ebs</li>
                    <li className='text-4xl'>essb</li>
                    <li className='text-4xl'>eabav</li>
                </ul>
                <div className='mr-6'>
                    <img className='' src={future_Plans} alt=""></img>
                </div>
            </div>

        </div>
    )
}
