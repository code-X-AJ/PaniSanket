import React, { useState } from 'react';
import Navbar from '../components/Navbar-new';
import MReports from '../components/MReports';
import MNotifications from '../components/MNotifications';

export default function MonthlyReport() {
  const [showReports, setShowReports] = useState(true);

  return (
    <div className="bg-cover bg-center h-screen bg-gradient-to-b from-blue-600 to-white">
      <div className="mx-[10%]">
        <Navbar />
      </div>

      <h1 className="text-center text-5xl m-4 font-bold text-white">Monthly Report</h1>
      <div className='m-auto w-[80vw] mt-5'>
        <div className='flex m-4 justify-between w-1/4'>
          <h1 className={`text-2xl mx-2 text-white relative hover:cursor-pointer hover:text-slate-50 ${showReports ? 'font-bold' : ''}`} onClick={() => setShowReports(true)}>
            Reports
            {showReports && (
              <span className={`absolute top-8 bottom-0 left-0 w-full h-1 bg-white rounded-full`}></span>
            )}
          </h1>
          <span className="absolute w-1 h-6 ml-32 mt-2 bg-white rounded-full"></span>
          <h1 className={`text-2xl mx-2 text-white relative hover:cursor-pointer hover:text-slate-50 ${!showReports ? 'font-bold' : ''}`} onClick={() => setShowReports(false)}>
            Notifications
            {!showReports && (
              <span className={`absolute top-8 bottom-0 left-0 w-full h-1 bg-white rounded-full`}></span>
            )}
          </h1>
        </div>

        {showReports ? <MReports /> : <MNotifications />}
      </div>
    </div>
  );
}
