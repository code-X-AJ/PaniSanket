import React, { useState, useEffect } from 'react';
import Report from '../components/Report';

export default function Reports() {
    const [reports, setReports] = useState([
        {
            title: 'akljsfoiah;wepr',
            description: 'loreadjnfai;oerwhbfgvpbahriupghao9;wehgp9aew8sgszoivfhndguopir;aewfhgpgpvuroiawhphujvhnapgeughpgv9rhanuew8guh7vrrdfuhngpa9euohjnsrdgfvpueahng',
            image: '/PaniSanket/client/assets/Pics/download (4).png'
        }, {
            title: 'akljsfoiah;wepr',
            description: 'loreadjnfai;oerwhbfgvpbahriupghao9;wehgp9aew8sg',
            image: '/PaniSanket/client/assets/Pics/download (4).png'
        }, {
            title: 'akljsfoiah;wepr',
            description: 'loreadjnfai;oerwhbfgvpbahriupghao9;wehgp9aew8sg',
            image: '/PaniSanket/client/assets/Pics/download (4).png'
        },
        {
            title: 'you know who',
            description: 'as;lfjpawirehjftoarewsuigfvhna[p9fuhdga[p9hga[p9r8tg',
            image: '/PaniSanket/client/assets/Pics/Alert.png'
        }
    ]);

    const truncateDescriptions = () => {
        const updatedReports = reports.map(report => ({
            ...report,
            description: report.description.length > 60 ? report.description.slice(0, 60) + "..." : report.description
        }));
        setReports(updatedReports);
    };

    useEffect(() => {
        truncateDescriptions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Call truncateDescriptions once on component mount

    return (
        <div className='m-4'>
            <h1 className='text-center text-5xl m-4 font-bold'>Reports</h1>

            <div className='grid grid-cols-4 gap-16 my-5'>
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
    );
}
