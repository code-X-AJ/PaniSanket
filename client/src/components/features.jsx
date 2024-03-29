import React from 'react';
import real_time_report from '../assets/real-time_reporting.jpg'
import monthly_report from '../assets/monthly_reports.jpg'
import notify from '../assets/notify.jpg'

export default function Features(props) {

    var title = "";
    var para = "";
    var img_src = "";

    if (props.feature === 1) {
        title = "Real-time Reporting"
        para = "Certainly! Here is a continuation of the to bring more depth and clarity to your writing. By incorporating descriptive language and engaging details, you can captivate your audience and leaftujygj. link for the webpage"
        img_src = real_time_report
    }
    if (props.feature === 2) {
        title = "Monthly Reports"
        para = "Certainly! Here is a continuation of the passage: to bring more depth and clarity to your writing. By incorporating descriptive language and engaging details, you can captivate your audience and leaftujygj. link for the webpage"
        img_src = monthly_report
    }
    if (props.feature === 3) {
        title = "Water Cut Notifications"
        para = "Certainly! Here is a continuation of the to bring more depth and clarity to your writing. By incorporating descriptive language and engaging details, you can captivate your audience and leaftujygj. link for the webpage"
        img_src = notify
    }

    var text = (
        <div className='sm:w-3/6 w-4/5'>
            <h1 className='m-5 text-3xl font-bold'>{title}</h1>
            <p className='m-5 text-justify text-2xl'>{para}</p>
        </div>
    );

    var img = (
        <div className='m-5'>
            <img src={img_src} alt=''/>
        </div>
    );

    var feature = '';

    if (props.orient) {
        feature = (
            <div className='sm:flex'>
                {text}
                {img}
            </div>
        );
    } else {
        feature = (
            <div className='sm:flex'>
                {img}
                {text}
            </div>
        );
    }

    return feature;
}
