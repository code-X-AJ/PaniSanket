import React from 'react';

export default function Features(props) {

    var text = (
        <div className='w-3/6'>
            <h1 className='m-5 text-3xl font-bold'>{props.title}</h1>
            <p className='m-5 text-justify text-2xl'>{props.para}</p>
        </div>
    );

    var img = (
        <div className='m-5'>
            <img src={props.img} alt='' width='100%' height='100%'/>
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
