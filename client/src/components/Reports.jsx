import { React, useState, useEffect } from "react";
import { allReports, newReport } from "../utils/APIRoutes";
import axios from "axios";
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
import loading from "../assets/loading1.gif";

import { Form, Input } from 'antd'
const { TextArea } = Input;

export default function Reports() {
  const [reports, setReports] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [index, setIndex] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    async function fetchReports() {
      const { data } = await axios.get(allReports);
      if (data.status) {
        setReports(data.reports);
        setIsLoaded(true);
      }
    }
    fetchReports();
  }, []);

  const handleModel = (index) => {
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

  return (
    <>
      <h1 className="text-center text-white text-6xl font-semibold">Reports</h1>


      <div className='flex my-8 mx-16 justify-between w-[40%]'>
        <h1 className={`text-2xl text-white relative hover:cursor-pointer hover:text-slate-50`} >
          All
          <span className="absolute bottom-0 left-0 w-full h-1 bg-transparent border-b border-white transition-all duration-300 opacity-0"></span>
        </h1>
        <span className="w-1 h-6 mt-1 bg-white rounded-full"></span>
        <h1 className={`text-2xl text-white relative hover:cursor-pointer hover:text-slate-50 `} >
          My Reports
          <span className="absolute bottom-0 left-0 w-full h-1 bg-transparent border-b border-white transition-all duration-300 opacity-0"></span>
        </h1>
        <span className="w-1 h-6 mt-1 bg-white rounded-full"></span>
        <h1 className={`text-2xl text-white relative hover:cursor-pointer hover:text-slate-50 `} >
          Progress
          <span className="absolute bottom-0 left-0 w-full h-1 bg-transparent border-b border-white transition-all duration-300 opacity-0"></span>
        </h1>
        <span className="w-1 h-6 mt-1 bg-white rounded-full"></span>
        <h1 className={`text-2xl text-white relative hover:cursor-pointer hover:text-slate-50 `} >
          Finished
          <span className="absolute bottom-0 left-0 w-full h-1 bg-transparent border-b border-white transition-all duration-300 opacity-0"></span>
        </h1>
      </div>
      <div className="flex justify-center">
        {isLoaded ? (
          <div className="flex flex-wrap justify-center gap-5 my-5 ">
            {reports.map((report, id) => (
              <div className="card w-72 bg-base-100 shadow-xl" key={id}>
                <figure className="h-[20vh]">
                  <img src={report.image} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {report.title}!
                    {id == 0 && (
                      <div className="badge badge-primary text-xs">NEW</div>
                    )}
                  </h2>
                  <p>{report.description}</p>
                  <button
                    className="btn btn-outline btn-primary justify-normal w-20"
                    onClick={() => handleModel(id)}
                  >
                    More
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <img src={loading} className="" alt="" />
        )}
      </div>

      {isLoaded && (
        <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
          <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(8px)" />
          <ModalContent>
            <ModalCloseButton />
            <div className="m-8">

              <ModalBody>
                  <img src={reports[index].image} alt="" className="rounded-md h-[30vh] w-full"  />
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
                <label htmlFor="address" className='font-bold text-xl mx-2'>Location: </label>
                <h3 className='text-xl'>{reports[index].address}</h3>
              </ModalFooter>
              <h1 className="my-2 text-xl font-bold">Respond:</h1>
              <Form.Item>
                <TextArea name='description' rows={2} />
              </Form.Item>
              <Button mr={3} colorScheme="teal" type="submit">
                Attend
              </Button>
            </div>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}
