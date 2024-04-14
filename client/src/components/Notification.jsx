import { CaretRightOutlined } from '@ant-design/icons';
import React from 'react';
import { Collapse, theme } from 'antd';

const Title = "Notificaiton1"
const Timeline = "9:00 to 18:00"
const Description = "water cuts in city for maintainence";
const location = "sector 42 community center"
const date = "From: 2024-04-14 To: 2024-04-15"
const getItems = (panelStyle) => [
    {
        key: '1',
        label: <div><h1 className='font-bold text-xl font-[sans-serif]'>{Title}</h1><div className='text-base font-[cursive]'>{Timeline}</div></div>,
        children: <div className='text-xl font-[cursive]'>
            <p>
                {Description}
            </p>
            <div className='mt-8' htmlFor="">
                <h1 className='font-bold'>
                    Areas Affected:
                </h1>
                {location}
                <h1 className='float-right'>{date}</h1>
            </div>
            
        </div>,
        style: panelStyle,
    },
    {
        key: '2',
        label: <h1 className='text-lg'>{Title}</h1>,
        children: <div className='text-lg'><p>{Description}</p><label className='font-bold' >Timeline: </label>{Timeline}<br /> <label className='font-bold' htmlFor="">Address: </label> {location} <br />{date}</div>,
        style: panelStyle,
    },
    {
        key: '3',
        label: <h1 className='text-lg'>{Title}</h1>,
        children: <div className='text-lg'><p>{Description}</p><label className='font-bold' >Timeline: </label>{Timeline}<br /> <label className='font-bold' htmlFor="">Address: </label> {location} <br />{date}</div>,
        style: panelStyle,
    },
];
const App = () => {
    const { token } = theme.useToken();
    const panelStyle = {
        marginBottom: 24,
        background: "#F4F4F4",
        borderRadius: token.borderRadiusSM,
        border: 'none',
    };
    return (
        <div className='mt-8 flex justify-center'>
            <Collapse
                bordered={false}
                defaultActiveKey={['1']}
                expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                style={{
                    background: "transparent",
                    width: "70rem",
                }}
                items={getItems(panelStyle)}
            />
        </div>
    );
};
export default App;