
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import { Slide, ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Navbar from '../components/Navbar-new'
import Reports from '../components/Reports'
import CreateNew from '../components/CreateNew'
import { allReports, newReport } from '../utils/APIRoutes'
import loading from "../assets/loading1.gif";


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
    Badge
} from "@chakra-ui/react";

import { Form, Input } from 'antd'
const { TextArea } = Input;

export default function MyReports() {
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
        <div
            className="bg-cover bg-center h-screen bg-gradient-to-b from-blue-600 to-white "
        // className="bg-cover bg-center h-screen "
        // style={{ backgroundImage: `url(${waterBG})` }}
        >
            <div className="mx-[10%]">
                <Navbar />
            </div>
            <div className="mx-[3%]">
                <h1 className="text-center text-white text-6xl font-semibold">Reports</h1>



                <div className="flex justify-center">
                    {isLoaded ? (
                        <div className="flex flex-col justify-center gap-5 my-5 ">
                            {reports.map((report, id) => (
                                <Card
                                    direction={{ base: 'column', sm: 'row' }}
                                    overflow='hidden'
                                    variant='outline'
                                >
                                    <Image
                                        objectFit='cover'
                                        maxW={{ base: '100%', sm: '200px' }}
                                        src={report.image}
                                        alt='Caffe Latte'
                                    />
                                    <Stack className='w-[50vw]'>
                                        <CardBody>
                                            <Heading size='md'>{report.title}</Heading>

                                            <Text py='2'>
                                                {report.description}...
                                            </Text>
                                        </CardBody>

                                        <CardFooter>
                                            <Button variant='solid' colorScheme='blue' onClick={() => handleModel(id)}>
                                                More
                                            </Button>
                                        </CardFooter>
                                    </Stack>
                                    <Badge colorScheme='green' className='mt-2 mr-2 h-5 float-right'>Resolved</Badge>
                                </Card>
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
                                    <img src={reports[index].image} alt="" className="rounded-md h-[30vh] w-full" />
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
                                <div className="p-4 overflow-y-auto max-h-[30vh] border border-gray-300 rounded-lg relative">

                                    <div className="flex flex-col items-end">
                                        <div className="bg-green-500 text-white py-2 px-4 rounded-lg mb-2 max-w-3/4">
                                            <p>Hey there!</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-start">
                                        <div className="bg-gray-300 text-black py-2 px-4 rounded-lg mb-2 max-w-3/4">
                                            <p>Hi! How are you?</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <div className="bg-green-500 text-white py-2 px-4 rounded-lg mb-2 max-w-3/4">
                                            <p>I'm doing great, thanks!</p>
                                        </div>
                                    </div>
                                </div>

                                <Form.Item>
                                    <TextArea name='description' rows={2} />
                                </Form.Item>
                                <Button mr={3} colorScheme="teal" type="submit">
                                    Respond
                                </Button>
                            </div>
                        </ModalContent>
                    </Modal>
                )}
            </div>
            <ToastContainer />
        </div >
    )
}
