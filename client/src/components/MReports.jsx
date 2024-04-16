import React from 'react';
import { Table } from 'antd';
const columns = [
    {
        title: 'Issue',
        dataIndex: 'issue',
        width: '20%',
    },
    {
        title: 'Description',
        dataIndex: 'description',
        width:'50%',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        width: '30%',
    },
];
const data = [
    {
        key: '1',
        issue: 'puddle in our area',
        description: 'There is a puddle in our locality...',
        address: '#582/4',
    },
    {
        key: '2',
        issue: 'tap leakage 1',
        description: 'there is water pipe leakage...',
        address: 'sector 18',
    },
    {
        key: '3',
        issue: 'tap leakage',
        description: 'there is tap leakage problem in the central sector park...',
        address: 'sector 42 park',
    },
    {
        key: '4',
        issue: 'pipe burst 1',
        description: 'central park water pipe burst',
        address: 'react sector 18',
    },
];
const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};
const MReports = () => <Table columns={columns} dataSource={data} onChange={onChange} />;
export default MReports;