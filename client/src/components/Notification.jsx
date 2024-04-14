import { CaretRightOutlined } from '@ant-design/icons';
import React from 'react';
import { Collapse, theme } from 'antd';

const Title = "Notificaiton1"
const Timeline = "9:00 to 18:00"
const Description = "water cuts in city for maintainence";
const location = "sector 42 community center"
const Todate = "2024-04-15"
const Fromdate= "2024-04-14 "
const getItems = (panelStyle) => [
    {
        key: '1',
        label: <div><h1 className='font-bold text-xl'>{Title}</h1><div className='text-base'>{Timeline}</div></div>,
        children: <div className='text-xl flex flex-col items-center'>
            <div className='flex justify-between w-3/5'>
                <h1 className='leading-7'>Details:</h1>
                <p>{Description}</p>
            </div>
            <div className='flex justify-between w-3/5'>
                <h1 className='leading-7'>Areas Affected:</h1>
                <p>{location}</p>
            </div>
            <div className='flex justify-between w-3/5'>
                <h1 className='leading-7'>From:</h1>
                <p>{Fromdate}</p>
            </div>
            <div className='flex justify-between w-3/5'>
                <h1 className='leading-7'>To:</h1>
                <p>{Todate}</p>
            </div>
        </div>,
        style: panelStyle,
    },
    {
        key: '2',
        label: <h1 className='text-lg'>{Title}</h1>,
        // children: <div className='text-lg'><p>{Description}</p><label className='font-bold' >Timeline: </label>{Timeline}<br /> <label className='font-bold' htmlFor="">Address: </label> {location} <br />{date}</div>,
        style: panelStyle,
    },
    {
        key: '3',
        label: <h1 className='text-lg'>{Title}</h1>,
        // children: <div className='text-lg'><p>{Description}</p><label className='font-bold' >Timeline: </label>{Timeline}<br /> <label className='font-bold' htmlFor="">Address: </label> {location} <br />{date}</div>,
        style: panelStyle,
    },
];
const App = () => {
    const { token } = theme.useToken();
    const panelStyle = {
        marginBottom: 24,
        background: "#D8DEFB",
        borderRadius: token.borderRadiusSM,
        border: 'none',
        opacity: "70%",
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