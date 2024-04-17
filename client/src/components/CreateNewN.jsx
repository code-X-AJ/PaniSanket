import React, { useState } from 'react';
import { Button } from '@chakra-ui/react'
import { Modal } from 'antd';
import { IoIosAdd } from 'react-icons/io';
import {    
    ButtonAnt,
    Cascader,
    Checkbox,
    ColorPicker,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Slider,
    Switch,
    TreeSelect,
    Upload,
} from 'antd';

import { PlusOutlined } from '@ant-design/icons';
const{ RangePicker } = DatePicker;
const { TextArea } = Input;

const App = () => {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const showModal = () => {
        setOpen(true);
    };
    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setOpen(false);
        }, 3000);
    };
    const handleCancel = () => {
        setOpen(false);
    };
    return (
        <>
            <button
                className="fixed bottom-6 right-4 inline-block py-2 px-6 rounded-xl bg-cyan-600 hover:bg-cyan-800 hover:text-white text-gray-50 font-bold leading-loose transition duration-200"
                onClick={showModal}
            >
                <IoIosAdd className="size-8 m-1 inline-block" />
                Create New
            </button>
            <Modal
                open={open}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button mx={3} key="back" onClick={handleCancel}>
                        Return
                    </Button>,
                    <Button mr={3} colorScheme="teal" type="submit">
                        Submit
                    </Button>,
                ]}
            >
                <h1 className="text-center text-5xl m-4 font-bold">Report</h1>
                <div>
                    <Form
                        labelCol={{
                            span: 4,
                        }}
                        wrapperCol={{
                            span: 14,
                        }}
                        layout="horizontal"
                        style={{
                            maxWidth: 600,
                        }}
                        
                    >

                        <Form.Item label="Title">
                            <Input name='title' />
                        </Form.Item>
                        <Form.Item label="City">
                            <Input name='city' />
                        </Form.Item>
                        <Form.Item label="Address">
                            <Input name='address' />
                        </Form.Item>
                        <Form.Item label="Description">
                            <TextArea name='description' rows={2} />
                        </Form.Item>

                        <Form.Item label="Timeline">
                            <RangePicker name='time' />
                        </Form.Item>


                    </Form>
                </div>
            </Modal>
        </>
    );
};
export default App;