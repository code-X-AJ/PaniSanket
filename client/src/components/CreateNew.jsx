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
    setPostImage({ ...postImage, base64 });
  };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleValidation = () => {
    const { title, description, city, address } = values;
    console.log("handle validdation......",title, description, city, address );
    // if (title === "" || description === "" || city === "" || address === "") {
    //   toast.error(
    //     "invalid data",
    //     toastOptions
    //   );
    //   return false;
    // }

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
            <form
              action=""
              method="post"
              className=""
              onSubmit={(event) => {
                handleSubmit(event);
              }}
            >
              <ul className="grid grid-cols-1 mx-20">
                <li className="grid m-1">
                  <label htmlFor="fullname">Title</label>
                  <input
                    type="text"
                    name="title"
                    id=""
                    placeholder="Enter your fullname"
                    className="border-teal-600 border-b-2 h-8 focus:border-b-2 focus:shadow-[0.2rem_0.3rem_0.4rem_0.1rem] focus:shadow-teal-200 outline-none"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </li>
                <li className="grid m-1">
                  <label htmlFor="description">Desciption</label>
                  <textarea
                    name="description"
                    id=""
                    placeholder="Enter your descripton"
                    cols="30"
                    rows="1"
                    className="border-teal-600 border-b-2 focus:border-b-2 focus:shadow-[0.2rem_0.3rem_0.4rem_0.1rem] focus:shadow-teal-200 outline-none flex justify-end"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  ></textarea>
                </li>
                <li className="grid m-1">
                  <label htmlFor="Address">City</label>
                  <input
                    type="text"
                    name="city"
                    id=""
                    placeholder="Enter your Address"
                    className="border-teal-600 border-b-2 h-8 focus:border-b-2 focus:shadow-[0.2rem_0.3rem_0.4rem_0.1rem] focus:shadow-teal-200 outline-none"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </li>
                <li className="grid m-1">
                  <label htmlFor="Address">Address</label>
                  <input
                    type="text"
                    name="address"
                    id=""
                    placeholder="Enter your Address"
                    className="border-teal-600 border-b-2 h-8 focus:border-b-2 focus:shadow-[0.2rem_0.3rem_0.4rem_0.1rem] focus:shadow-teal-200 outline-none"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </li>
                <li className="grid m-1">
                  <label htmlFor="images">Image</label>
                  <input
                    type="file"
                    name="image"
                    id=""
                    placeholder="Enter your images"
                    className=""
                    onChange={(e) => handleFileUpload(e)}
                  />
                </li>
              </ul>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button mr={3} colorScheme="teal" type="submit">
                  Submit
                </Button>
              </ModalFooter>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CreateNew;
