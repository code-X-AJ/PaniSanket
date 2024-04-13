import { React, useState, useEffect } from "react";
import Report from "../components/Report";
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

export default function Reports() {
  const [reports, setReports] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    async function fetchReports() {
      console.log("this fetch reports....");
      const { data } = await axios.get(allReports);
      if (data.status) {
        console.log("data is .....", data.reports);
        setReports(data.reports);
        setIsLoaded(true);
      }
    }
    fetchReports();
  }, []);

  useEffect(() => {
    console.log("use effect reporting....", reports);
  }, [reports]);

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

  useEffect(() => {
    truncateDescriptions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="">
      <h1 className="text-center text-white text-6xl font-semibold">Reports</h1>

      {
        // isLoaded && <div className='grid grid-cols-2 gap-16 my-5'>
        isLoaded && (
          <div className="flex gap-5 mt-5 ">
            {reports.map((report, id) => (
            <>
              <div className="card w-72 bg-base-100 shadow-xl">
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
                      onClick={onOpen}
                    >
                      More...
                    </button>
                </div>

              </div>
                <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
                  <ModalOverlay
                    bg="blackAlpha.300"
                    backdropFilter="blur(8px)"
                  />

                  <ModalContent>
                    <div className="m-8">
                      <h1 className="text-5xl mb-2 ml-6 font-bold">
                        {report.title}
                      </h1>
                      <ModalCloseButton />
                      <ModalBody>
                        <img src={report.image} alt="" className="rounded-sm" />
                        <p className="text-xl text-justify">
                          {report.description}
                        </p>
                      </ModalBody>
                      <div className="flex justify-center m-2">
                        <div className="bg-zinc-900 w-10/12 h-0.5 rounded"></div>
                      </div>
                      <ModalFooter>
                        <label
                          htmlFor="address"
                          className="font-bold text-xl mx-2"
                        >
                          Location:{" "}
                        </label>
                        <h3 className="text-xl">{report.address}</h3>
                      </ModalFooter>
                    </div>
                  </ModalContent>
                </Modal>
            </>

            ))}
          </div>
        )
      }
    </div>
  );
}
  // <Report
  //     key={id}
  //     title={report.title}
  //     description={report.description}
  //     image={report.image}
  //     address={report.address}
  // />