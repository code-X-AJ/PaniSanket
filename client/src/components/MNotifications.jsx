import React from 'react';
import { Table } from 'antd';
import { background } from '@chakra-ui/react';
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        width: '20%',
    },
    {
        title: 'Detail',
        dataIndex: 'detail',
        width: '30%'
    },
    {
        title: 'Areas Affected',
        dataIndex: 'areas affected',
        width: '30%',
    },
    {
        title: 'Date',
        dataIndex: 'date',
        width: '10%'
    },
    {
        title: 'Timings',
        dataIndex: 'timings',
        width: '30%',
    },
];
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
    },
    {
        key: '4',
        name: 'Jim Red',
        age: 32,
        address: 'London No. 2 Lake Park',
    },
];
const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};
const App = () => <Table columns={columns} dataSource={data} onChange={onChange}/>;
export default App;