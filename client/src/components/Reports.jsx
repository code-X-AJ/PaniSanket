import {React, useState,useEffect} from 'react'
import Report from '../components/Report'

export default function Reports() {
    const [reports, setReports] = useState([
        {
            title: 'puddle of water in society',
            description: "A persistent puddle in [Locality] poses safety hazards, health risks, and infrastructure damage. Its presence jeopardizes pedestrian and motorist safety, potentially breeding disease-carrying insects. Moreover, it damages surrounding infrastructure and undermines the area's aesthetic appeal, impacting property values. Urgent action, such as improving drainage systems or repairing infrastructure, is necessary to mitigate these concerns. Addressing this issue promptly will enhance community safety, health, and overall quality of life. Your swift attention to this matter is appreciated.",
            image: '/PaniSanket/client/assets/Pics/puddle.jpg'
        }, {
            title: 'water tap not working',
            description: "I am writing to report an urgent issue regarding a non-functional water tap in [Location]. The tap, which serves [specific area or purpose], is currently not working, causing inconvenience and disruption to residents/businesses in the vicinity./nThe malfunctioning tap is affecting [mention specific consequences, such as limited access to water for residents, hygiene concerns, or operational difficulties for businesses]. Immediate action is necessary to restore functionality and alleviate the impact on the affected individuals and entities.",
            image: '/PaniSanket/client/assets/Pics/Retro-Black-Home-Tap.jpg'
        },
    ]);

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
        <div className='m-4 '>
            <h1 className='text-center text-5xl m-4 font-bold'>Reports</h1>

            <div className='grid grid-cols-1 gap-16 w-[50vw] my-5'>
                {reports.map((report, id) => (
                    <Report
                        key={id}
                        title={report.title}
                        description={report.description}
                        image={report.image}
                    />
                ))}
            </div>
        </div>
    )
}
