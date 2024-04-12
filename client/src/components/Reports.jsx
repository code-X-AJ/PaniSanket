import {React, useState,useEffect} from 'react'
import Report from '../components/Report'
import { allReports, newReport } from '../utils/APIRoutes'
import  axios  from 'axios'; 

export default function Reports() {

    const [reports, setReports] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);


    useEffect(() => {
        async function fetchReports() {
            console.log("this fetch reports....");
            const { data } = await axios.get(allReports);
            if (data.status) {
                console.log("data is .....",data.reports);
                setReports(data.reports)
                setIsLoaded(true)
            }
        }
        fetchReports();
    }, []);

    useEffect(()=>{
        console.log("use effect reporting....", reports);
    },[reports])

    

    const truncateDescriptions = () => {
        const updatedReports = reports.map(report => ({
            ...report,
            description: report.description.length > 150 ? report.description.slice(0, 150) + "..." : report.description
        }));
        setReports(updatedReports);
    };

    useEffect(() => {
        truncateDescriptions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='m-4'>
            <h1 className='text-center text-5xl m-4 font-bold'>Reports</h1>

            {
                isLoaded && <div className='grid grid-cols-2 gap-16 my-5'>
                {reports.map((report, id) => (
                    <Report
                        key={id}
                        title={report.title}
                        description={report.description}
                        image={report.image}
                        address={report.address}
                    />
                ))}
            </div>
            }

        </div>
    )
}
