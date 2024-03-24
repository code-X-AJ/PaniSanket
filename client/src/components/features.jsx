import React from 'react';

export default function Features(props) {

    var title = "";
    var para = "";
    var img_src = "";

    if (props.feature === 1) {
        title = "Real-time Reporting"
        para = "Certainly! Here is a continuation of the to bring more depth and clarity to your writing. By incorporating descriptive language and engaging details, you can captivate your audience and leaftujygj. link for the webpage"
        img_src = "https://imgs.search.brave.com/aR5c79jxKhAnv6heZgybNw0PKo3ii2ehk1jRuCnaoho/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9ibG9n/LmxvZ3JvY2tldC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjQvMDEvcmVhY3Qt/bmF0aXZlLW5hdmln/YXRpb24tdHV0b3Jp/YWwucG5n"
    }
    if (props.feature === 2) {
        title = "Monthly Reports"
        para = "Certainly! Here is a continuation of the passage: to bring more depth and clarity to your writing. By incorporating descriptive language and engaging details, you can captivate your audience and leaftujygj. link for the webpage"
        img_src = "https://imgs.search.brave.com/aR5c79jxKhAnv6heZgybNw0PKo3ii2ehk1jRuCnaoho/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9ibG9n/LmxvZ3JvY2tldC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjQvMDEvcmVhY3Qt/bmF0aXZlLW5hdmln/YXRpb24tdHV0b3Jp/YWwucG5n"
    }
    if (props.feature === 3) {
        title = "Water Cut Notifications"
        para = "Certainly! Here is a continuation of the to bring more depth and clarity to your writing. By incorporating descriptive language and engaging details, you can captivate your audience and leaftujygj. link for the webpage"
        img_src = "https://imgs.search.brave.com/aR5c79jxKhAnv6heZgybNw0PKo3ii2ehk1jRuCnaoho/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9ibG9n/LmxvZ3JvY2tldC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjQvMDEvcmVhY3Qt/bmF0aXZlLW5hdmln/YXRpb24tdHV0b3Jp/YWwucG5n"
    }

    var text = (
        <div className='w-3/6'>
            <h1 className='m-5 text-3xl font-bold'>{title}</h1>
            <p className='m-5 text-justify text-2xl'>{para}</p>
        </div>
    );

    var img = (
        <div className='m-5'>
            <img src={img_src} alt='' width='100%' height='100%' />
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
