import React from 'react'
import Navbar from '../components/Navbar'
import Reports from '../components/Reports'
import ShowMore from '../components/ShowMore'
import CreateNew from '../components/CreateNew'

export default function Reporting() {
    return (
        <div>
            <Navbar />

            <Reports/>
            
            <ShowMore/>

            <CreateNew/>
        </div>
    )
}
