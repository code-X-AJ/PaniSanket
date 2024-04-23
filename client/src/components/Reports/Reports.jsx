import { React, useState, useEffect } from "react";
import { allReports, newResponse, fetchResponse } from "../../utils/APIRoutes";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Toast,
} from "@chakra-ui/react";
import AllReports from "./AllReports";
import IsProgress from "./IsProgress";
import IsResolved from "./IsResolved";
import MyReport from "./MyReport";

import { Form, Input } from "antd";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Reports() {
  const navigate = useNavigate();

  const { TextArea } = Input;
  const [reports, setReports] = useState([]);
  const [messages, setMessages] = useState([]);
  const [isMsgLoaded, setIsMsgLoaded] = useState(false);
  const [showAllReports, setShowAllReports] = useState(true);
  const [showProgressReports, setShowProgressReports] = useState(false);
  const [showFinshedReports, setShowFinshedReports] = useState(false);
  const [showMyReports, setShowMyReports] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [index, setIndex] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [official, setOfficial] = useState(false);
  const [isReportOwner, setIsReportOwner] = useState(false);
  const [updateFlag, setUpdateFlag] = useState(false);

  const [response, setResponse] = useState({
    msg: "",
  });

  const toastOptions = {
    theme: "light",
    position: "bottom-right",
    pauseOnHover: true,
    autoClose: 5000,
    draggable: true,
    transition: Slide,
  };

  useEffect(() => {
    if (!localStorage.getItem("PaniSanket-user")) {
      navigate("/login");
    } else {
      const isOfficial = JSON.parse(
        localStorage.getItem("PaniSanket-user")
      ).isOfficial;
      if (isOfficial) setOfficial(true);
    }
  }, []);

  useEffect(() => {
    async function fetchReports() {
      const { data } = await axios.get(allReports);
      if (data.status) {
        console.log("incoming reportss issssss......", data.reports);

        setReports(data.reports);
        setIsLoaded(true);
      }
    }
    fetchReports();
  }, [updateFlag]);
  
  useEffect(() => {
    async function fetchReports() {
      const { data } = await axios.get(allReports);
      if (data.status) {
        console.log("incoming reportss issssss......", data.reports);

        setReports(data.reports);
        setIsLoaded(true);
      }
    }
    fetchReports();
  }, []);

  useEffect(() => {
    console.log("messages useeffect", messages.response);
  }, [messages]);

  
  const handleModel = async(index) => {
    const reportId = reports[index]._id;
    const userId = JSON.parse(localStorage.getItem("PaniSanket-user"))._id;
    console.log("reportid.....", reportId);
    const { data } = await axios.post(fetchResponse, {
      report: reportId
    })

    if(userId == reports[index].userId){
      setIsReportOwner(true);
    }
    
    console.log("incoming data issssss......", data.response);
    setIsMsgLoaded(true)
    setMessages(data);
    setIndex(index);
    onOpen();
  };


  useEffect(() => {
    const truncateDescriptions = () => {
      const updatedReports = reports.map((report) => ({
        ...report,
        description:
          report.description.length > 150
            ? report.description.slice(0, 150) + "..."
            : report.description,
      }));
      setReports(updatedReports);
    };
    truncateDescriptions();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Thisis is handle submit...........");
    const { msg } = response;
    const userId = JSON.parse(localStorage.getItem("PaniSanket-user"))._id;
    const reportId = reports[index]._id;
    console.log(
      "Thisis is handle submit...........",
      msg,
      userId,
      reportId,
      newResponse
    );

    const { data } = await axios.post(newResponse, {
      message: msg,
      sender: userId,
      report: reportId,
    });
    if (data.status) {
      toast.success("Report successfully updated", toastOptions);
      setUpdateFlag(!updateFlag)
    } else {
      toast.error(data.msg, toastOptions);
    }

    console.log("response..........", response);
    console.log("reports......", reports[index]._id);
  };

  const handleChange = (event) => {
    setResponse({
      ...response,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <h1 className="text-center text-white text-6xl font-semibold">Reports</h1>

      <div className="flex my-8 mx-16 justify-between w-[40%]">
        <h1
          className={`text-2xl text-white relative hover:cursor-pointer hover:text-slate-50`}
          onClick={() => {
            setShowProgressReports(false);
            setShowAllReports(true);
            setShowFinshedReports(false);
            setShowMyReports(false);
          }}
        >
          All
          <span className="absolute bottom-0 left-0 w-full h-1 bg-transparent border-b border-white transition-all duration-300 opacity-0"></span>
        </h1>

        {!official && (
          <>
            <span className="w-1 h-6 mt-1 bg-white rounded-full"></span>
            <h1
              className={`text-2xl text-white relative hover:cursor-pointer hover:text-slate-50 `}
              onClick={() => {
                setShowProgressReports(false);
                setShowAllReports(false);
                setShowFinshedReports(false);
                setShowMyReports(true);
              }}
            >
              My Reports
              <span className="absolute bottom-0 left-0 w-full h-1 bg-transparent border-b border-white transition-all duration-300 opacity-0"></span>
            </h1>
          </>
        )}

        {official && (
          <>
            <span className="w-1 h-6 mt-1 bg-white rounded-full"></span>
            <h1
              className={`text-2xl text-white relative hover:cursor-pointer hover:text-slate-50 `}
              onClick={() => {
                setShowProgressReports(true);
                setShowAllReports(false);
                setShowFinshedReports(false);
                setShowMyReports(false);
              }}
            >
              Progress
              <span className="absolute bottom-0 left-0 w-full h-1 bg-transparent border-b border-white transition-all duration-300 opacity-0"></span>
            </h1>

            <span className="w-1 h-6 mt-1 bg-white rounded-full"></span>
            <h1
              className={`text-2xl text-white relative hover:cursor-pointer hover:text-slate-50 `}
              onClick={() => {
                setShowProgressReports(false);
                setShowAllReports(false);
                setShowFinshedReports(true);
                setShowMyReports(false);
              }}
            >
              Finished
              <span className="absolute bottom-0 left-0 w-full h-1 bg-transparent border-b border-white transition-all duration-300 opacity-0"></span>
            </h1>
          </>
        )}
      </div>


      {isLoaded && showAllReports && (
        <AllReports
          reports={reports}
          isLoaded={isLoaded}
          handleModel={handleModel}
          onResolve={()=>setUpdateFlag(!updateFlag)}

        />
      )}
      {isLoaded && showProgressReports && (
        <IsProgress
          reports={reports}
          isLoaded={isLoaded}
          handleModel={handleModel}
        />
      )}
      {isLoaded && showFinshedReports && (
        <IsResolved
          reports={reports}
          isLoaded={isLoaded}
          handleModel={handleModel}
        />
      )}
      {isLoaded && showMyReports && (
        <MyReport
          reports={reports}
          isLoaded={isLoaded}
          handleModel={handleModel}
          onResolve={()=>setUpdateFlag(!updateFlag)}
        />
      )}

      {isLoaded && (
        <Modal isOpen={isOpen} onClose={onClose} size={"lg"}>
          <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(8px)" />
          <ModalContent>
            <ModalCloseButton />
            <div className="m-8">
              <ModalBody>
                <img
                  src={reports[index].image}
                  alt=""
                  className="rounded-md h-[30vh] w-full"
                />
                <h1 className="text-4xl font-bold  my-4">
                  {reports[index].title}
                </h1>
                <p className="text-xl text-justify">
                  {reports[index].description}
                </p>
              </ModalBody>

              <div className="flex justify-center m-2">
                <div className="bg-zinc-900 w-10/12 h-0.5 rounded"></div>
              </div>
              <ModalFooter>
                <label htmlFor="address" className="font-bold text-xl mx-2">
                  Location:{" "}
                </label>
                <h3 className="text-xl">{reports[index].address}</h3>
              </ModalFooter>
              {(official || isReportOwner) &&   (
                <div className="px-6">
                  <hr />
                  <div>
                    <div className="chat chat-start">
                      <div className="chat-header my-2 font-semibold text-base">
                        Officials
                      </div>
                      { isMsgLoaded && messages.response.map((msg, id) => (
                        <div className="chat-bubble my-1" key={id}>
                          {msg.message.text}
                        </div>
                      ))}
                    </div>
                  </div>

                  <h1 className="my-2 text-xl font-bold">Respond:</h1>
                  <form
                    action=""
                    onSubmit={(event) => {
                      handleSubmit(event);
                    }}
                  >
                    <Form.Item>
                      <TextArea
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        name="msg"
                        rows={2}
                      />
                    </Form.Item>
                    <Button mr={3} colorScheme="teal" type="submit">
                      {official && "Attend" || isReportOwner && "Feedback"}
                    </Button>
                  </form>
                </div>
              )}
            </div>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}
