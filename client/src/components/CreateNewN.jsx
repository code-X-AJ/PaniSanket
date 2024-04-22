import React, { useState, useEffect } from "react";
import { Slide, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { Modal } from "antd";
import { IoIosAdd } from "react-icons/io";
import moment from "moment"; // Import moment library for time formatting
import { newNotify } from "../utils/APIRoutes";
import axios from "axios";

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
} from "antd";

import { PlusOutlined } from "@ant-design/icons";
import { TimePicker } from "antd";
const { RangePicker } = DatePicker;
const { TextArea } = Input;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const navigate = useNavigate();

  const [values, setValues] = useState({
    userId: "",
    title: "",
    description: "",
    address: "",
    date: "",
    time: "",
  });

  const toastOptions = {
    theme: "light",
    position: "bottom-right",
    pauseOnHover: true,
    autoClose: 5000,
    draggable: true,
    transition: Slide,
  };

  const onOk = (value) => {
    const formattedTime1 = moment(value[0].$d).format("HH:mm");
    const formattedTime2 = moment(value[1].$d).format("HH:mm");
    const samay = formattedTime1 + " " + formattedTime2;
    setValues({
      ...values,
      ["time"]: samay,
    });
  };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    console.log("handle change......", event.target.value);
  };

  useEffect(() => {
    console.log("field values ........", values);
  }, [values]);

  const handleValidation = () => {
    const { title, description, address, date, time } = values;
    console.log("handle validdation......", title, description, address);

    if (title.length <= 5 || title.length > 20) {
      toast.error(
        "title should be more than 5 characters and less than 20 characters",
        toastOptions
      );
      return false;
    }
    if (description.length <= 10 || description.length > 100) {
      toast.error(
        "description should be more than 100 characters and less than 10 characters",
        toastOptions
      );
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      const { title, description, address, date, time } = values;
      const userId = JSON.parse(localStorage.getItem("PaniSanket-user"))._id;

      const { data } = await axios.post(newNotify, {
        userId,
        title,
        description,
        address,
        date,
        time,
      });

      console.log("server response is ....", data);

      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        toast.success(data.msg, toastOptions);
        setOpen(false);
        navigate("/notify");
      }
    }
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
      <Modal open={open} onOk={handleOk} onCancel={handleCancel}>
        <h1 className=" text-center text-5xl m-4 font-bold">Water Cuts</h1>
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
            onSubmitCapture={(e) => {
              handleSubmit(e);
            }}
          >
            <Form.Item label="Title" className="font-semibold">
              <Input
                name="title"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </Form.Item>
            <Form.Item label="Address" className="font-semibold">
              <Input
                name="address"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </Form.Item>
            <Form.Item label="Description" className="font-semibold">
              <TextArea
                name="description"
                onChange={(e) => {
                  handleChange(e);
                }}
                rows={2}
              />
            </Form.Item>

            <Form.Item label="Date" className="font-semibold">
              <RangePicker
                onChange={(value, dateString) => {
                  setValues({
                    ...values,
                    ["date"]: dateString[0]+" "+dateString[1],
                  });
                }}
              />
            </Form.Item>

            {/* <Form.Item label="Time" className="font-semibold">
              <TimePicker.RangePicker
                name="time"
                // onChange={(timeRange) =>{
                //     setValues({
                //         ...values,
                //         ['time']: timeRange,
                //     });
                //     console.log("time is s........", timeRange);
                // }}
              />
            </Form.Item> */}
            <Form.Item label="Time" className="font-semibold">
              <TimePicker.RangePicker
                showTime={{
                  format: "HH:mm",
                }}
                format="HH:mm"
                onChange={(value) => {
                  console.log("Selected Time: ", value);
                }}
                onOk={onOk}
              />
            </Form.Item>
              <Button mx={3} key="back" onClick={handleCancel}>
                Return
              </Button>
              ,
              <Button mr={3} colorScheme="teal" type="submit">
                Submit
              </Button>

          </Form>
        </div>
      </Modal>
    </>
  );
};
export default App;
