import { CaretRightOutlined } from '@ant-design/icons';
import React from 'react';
import { Collapse, theme } from 'antd';

// const Title = "Notification1";
// const Timeline = "9:00 to 18:00";
// const Description = "water cuts in city for maintenance";
// const Location = "sector 42 community center";
// const Todate = "2024-04-15";
// const Fromdate = "2024-04-14";

const notifications = [
    {
        "_id": "6615110b99f045d88efe6d3f",
        "userId": "65e95205f96f95c08a9c3632",
        "title": "notification 1",
        "description": "water cuts in city for maintenance ",
        "address": "sector 42 community center",
        "date": "2024-04-08",
        "time": "9:00 to 18:00",
        "createdAt": "2024-04-09T09:57:31.199Z",
        "__v": 0
    },
    // Other notifications...
];

const getItems = (panelStyle) =>
    notifications.map((notification, id) => ({
        key: id.toString(),
        label: <h1 className='font-bold text-2xl'>{notification.title}</h1>,
        children: (
            <div className='text-2xl flex flex-col items-center font-bold'>
                <div className='flex justify-between w-3/5'>
                    <h1 className='leading-7'>Details:</h1>
                    <p>{notification.description}</p>
                </div>
                <div className='flex justify-between w-3/5'>
                    <h1 className='leading-7'>Areas Affected:</h1>
                    <p>{notification.address}</p>
                </div>
                <div className='flex justify-between w-3/5'>
                    <h1 className='leading-7'>From:</h1>
                    <p>{notification.date}</p>
                </div>
                <div className='flex justify-between w-3/5'>
                    <h1 className='leading-7'>To:</h1>
                    <p>Empty</p>
                </div>
                <div className='flex justify-between w-3/5'>
                    <h1 className='leading-7'>Timings:</h1>
                    <p>{notification.time}</p>
                </div>
            </div>
        ),
        style: panelStyle,
    }));

const App = () => {
    const { token } = theme.useToken();
    const panelStyle = {
        marginBottom: 24,
        background: "rgba(216,222,251,0.8)",
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
                accordion
                items={getItems(panelStyle)}
            />
        </div>
    );
};

export default App;
