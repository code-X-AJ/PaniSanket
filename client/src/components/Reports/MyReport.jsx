import React from "react";
import loading from "../../assets/loading1.gif";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Card,
  CardFooter,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Badge,
} from "@chakra-ui/react";
import axios from "axios";
import { resolveReport } from "../../utils/APIRoutes";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function MyReport({ isLoaded, reports, handleModel, onResolve }) {
  const userId = JSON.parse(localStorage.getItem("PaniSanket-user"))._id;
  // const filterReports = reports.filter((item) => item.userId == userId);

  const toastOptions = {
    theme: "light",
    position: "bottom-right",
    pauseOnHover: true,
    autoClose: 5000,
    draggable: true,
    transition: Slide,
  };


  
  const handleResolved = async(id) =>{
    const reportId = reports[id]._id;
    const {data} = await axios.post(resolveReport, {
      report : reportId
    })
    if (data.status) {
      toast.success("Report successfully updated", toastOptions);
      onResolve();
    } else {
      toast.error(data.msg, toastOptions);
    }
    console.log("handle resolve data ", data);
  }

  return (
    <div>
      {/*       
      <div className="flex justify-center">
        {isLoaded ? (
          <div className="flex flex-wrap justify-center gap-5 my-5 ">
            {filterReports.map((report, id) => (
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
      </div> */}

      <div className="flex justify-center">
        {isLoaded ? (
          <div className="flex flex-col justify-center gap-5 my-5 ">
            {reports.map((report, id) => (
               (report.userId == userId) &&
              (<Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
              >
                <Image
                  objectFit="cover"
                  maxW={{ base: "100%", sm: "200px" }}
                  src={report.image}
                  alt="Caffe Latte"
                />
                <Stack className="w-[50vw]">
                  <CardBody>
                    <Heading size="md">{report.title}</Heading>

                    <Text py="2">{report.description}...</Text>
                  </CardBody>

                  <CardFooter>
                    <Button
                      variant="solid"
                      colorScheme="blue"
                      onClick={() => handleModel(id)}
                    >
                      More
                    </Button>
                    <Button
                      variant="solid"
                      colorScheme="teal"
                      onClick={()=>handleResolved(id)}
                      className="ml-5"
                    >
                      Resolved
                    </Button>

                  </CardFooter>
                </Stack>
                <Badge
                  colorScheme={report.isProgress && "yellow" || report.isPending && "red" || report.isResolved && "green" }
                  className="mt-2 mr-2 h-5 float-right"
                >
                {report.isProgress && <span>Processing</span> || report.isPending && <span>waiting</span> || report.isResolved && <span>Resolved</span> }
                </Badge>
                
              </Card>)

            ))}
          </div>
        ) : (
          <img src={loading} className="" alt="" />
        )}
      </div>
    </div>
  );
}

export default MyReport;
