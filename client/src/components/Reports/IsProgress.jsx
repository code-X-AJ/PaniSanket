import React from 'react'
import loading from "../../assets/loading1.gif";

function IsProgress({isLoaded , reports, handleModel}){
  // const filteredReports = reports.filter(item=> item.isProgress==true)

  
  return (
    <div>
      <div className="flex justify-center">
        {isLoaded ? (
          <div className="flex flex-wrap justify-center gap-5 my-5 ">
            {reports.map((report, id) => (
              (report.isProgress) && 
              <div className="card w-72 bg-base-100 shadow-xl" key={id}>
                <figure className="h-[20vh]">
                  <img src={report.image} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {report.title}!
                    {id == 0 && (
                      <div className="badge badge-primary text-xs">NEW</div>
                    )}
                  </h2>
                  <p>{report.description}</p>
                  <button
                    className="btn btn-outline btn-primary justify-normal w-20"
                    onClick={() => handleModel(id)}
                  >
                    More
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <img src={loading} className="" alt="" />
        )}
      </div>
    </div>
  )
}

export default IsProgress
