import React, { useEffect, useState } from "react";
import { Slide, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { newReport } from "../utils/APIRoutes";
import { IoIosAdd } from "react-icons/io";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { PlusOutlined } from "@ant-design/icons";
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


const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  console.log("normFile....", e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

function CreateNew() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [postImage, setPostImage] = useState(undefined);

  const [values, setValues] = useState({
    title: "",
    description: "",
    city: "",
    address: "",
    image: "",
  });

  const navigate = useNavigate();

  const toastOptions = {
    theme: "light",
    position: "bottom-right",
    pauseOnHover: true,
    autoClose: 5000,
    draggable: true,
    transition: Slide,
  };

  function convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    console.log("img data...", base64);
    setPostImage({ ...postImage, base64 });
  };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    console.log("handle change......", event.target.value);
  };

  useEffect(()=>{
    console.log("values..", values); 
  },[values])
  
  const handleValidation = () => {
    const { title, description, city, address } = values;
    console.log("handle validdation......", title, description, city, address);

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
      const { title, description, city, address } = values;
      const userId = JSON.parse(localStorage.getItem("PaniSanket-user"))._id;
      const image = postImage.base64;

      const { data } = await axios.post(newReport, {
        title,
        userId,
        description,
        city,
        address,
        image,
      });

      console.log("server response is ....", data);

      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        toast.success(data.msg, toastOptions);
        onClose();
        navigate("/report");
      }
    }
  };

  return (
    <>
      <button
        className="fixed bottom-6 right-4 inline-block py-2 px-6 rounded-xl bg-cyan-600 hover:bg-cyan-800 hover:text-white text-gray-50 font-bold leading-loose transition duration-200"
        onClick={onOpen}
      >
        <IoIosAdd className="size-8 m-1 inline-block" />
        Create New
      </button>

      <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(8px)" />
        <ModalContent>
          <h1 className="text-center text-5xl m-4 font-bold">Report</h1>
          <ModalCloseButton />
          <ModalBody>
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
              className="flex flex-col ml-16"
              onSubmitCapture={(e) => {
                handleSubmit(e);
              }}
            >
              <Form.Item label="Title">
                <Input
                name="title"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </Form.Item>
              <Form.Item label="City">
                <Input
                name="city"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </Form.Item>
              <Form.Item label="Address">
                <Input
                name="address"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </Form.Item>
              <Form.Item label="Description">
                <TextArea
                name="description"

                  rows={2}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </Form.Item>

              <Form.Item
                label="Image"
                valuePropName="fileList"
                getValueFromEvent={normFile}
              >
                {/* <Upload name="image" listType="picture-card" >
                  <button
                    style={{
                      border: 0,
                      background: "none",
                    }}
                    type="button"
                  >
                    <PlusOutlined />
                    <div
                      style={{
                        marginTop: 8,
                      }}
                    >
                      Upload
                    </div>
                  </button>
                </Upload> */}
                <input
                  type="file"
                  lable="Image"
                  name="myFile"
                  id='file-upload'
                  accept='.jpeg, .png, .jpg'
                  onChange={(e) => handleFileUpload(e)}
                />

              </Form.Item>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button mr={3} colorScheme="teal" type="submit">
                  Submit
                </Button>
              </ModalFooter>
            </Form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CreateNew;
