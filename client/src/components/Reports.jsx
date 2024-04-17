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
} from "@chakra-ui/react";
import loading from "../assets/loading1.gif";

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

      <div className="flex justify-center">
        {isLoaded ? (
          <div className="flex flex-wrap justify-center gap-5 my-5 ">
            {reports.map((report, id) => (
              <div className="card w-72 bg-base-100 shadow-xl" key={id}>
                <figure>
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
                <img src={reports[index].image} alt="" className="rounded-md" />
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
                <label htmlFor="address" className="font-bold text-xl mx-2">Location: </label>
                <h3 className="text-xl">{reports[index].address}</h3>
              </ModalFooter>
            </div>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}
