import { getDoctorsDataById } from '@/app/lib/data';
import AppointmentBookingModal from '@/Components/AppointmentBookingModal';
import { Card, Chip } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { CiClock2 } from 'react-icons/ci';
import { FaCalendarPlus, FaClock, FaRegHospital, FaStar } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { HiOutlineDocumentCurrencyBangladeshi } from 'react-icons/hi2';

const DoctorDetails = async ({ params }) => {
    const { id } = await params;
    const doctor = await getDoctorsDataById(id);
    const { name, specialty, image, experience, description, hospital, fee, availability, rating, location } = doctor;

    return (
        <div className='container mx-auto'>
            <div className='mt-10 shadow-xl rounded-md flex flex-col lg:flex-row gap-4 max-w-3/4 mx-auto p-3'>
                <div className='border-2 border-[#14B8A6] rounded-md space-y-3 p-2 ' >
                    <Image src={image} alt={name} height={400} width={400} className=' max-w-80 rounded-md mx-auto' />
                </div>
                <div className='space-y-3'>
                    <h2 className='text-3xl font-bold '>{name}</h2>

                    <Chip className='bg-[#FFC300] rounded-[5px] '>{specialty}</Chip>
                    <br />
                    <Chip className='rounded-[5px]'><span className='text-yellow-500'> <FaStar /></span> {rating}/ <span className='text-muted'>5.00</span></Chip>
                    <p className='max-w-90 text-muted'>{description}</p>
                    <div className='grid md:grid-cols-2 gap-4 items-center'>
                        <div className='p-2 shadow-xl rounded-md border  flex gap-3 items-center'>
                            <div className='p-2 rounded-full bg-[#5eeedd3b]'>
                                <CiClock2 className='text-[#14B8A6] text-xl' />
                            </div>
                            <div>
                                <p className='font-semibold text-gray-700'>Experience</p>
                                <p className='text-[20px] font-semibold '>{experience}</p>
                            </div>

                        </div>
                        <div className='p-2 shadow-xl rounded-md border flex gap-3 items-center'>
                            <div className='p-2 bg-[#5eeedd3b]'>
                                <FaRegHospital
                                    className='text-[#14B8A6] text-xl' />
                            </div>
                            <div>
                                <p className=' font-semibold text-gray-700'>Hospital</p>
                                <p className='text-[20px] font-semibold '>{hospital}</p>
                            </div>
                        </div>
                        <div className='p-2 shadow-xl rounded-md border flex gap-3 items-center '>
                            <div className='p-2 bg-[#5eeedd3b]'>
                                <HiOutlineLocationMarker

                                    className='text-[#14B8A6] text-xl' />
                            </div>
                            <div>
                                <p className=' font-semibold text-gray-700'>Location</p>
                                <p className='text-[20px] font-semibold '>{location}</p>
                            </div>
                        </div>
                        <div className='p-2 shadow-xl rounded-md border flex gap-3 items-center'>
                            <div className='p-2 bg-[#5eeedd3b]'>
                                <FaCalendarPlus

                                    className='text-[#14B8A6] text-xl' />
                            </div>
                            <div>
                                <p className=' font-semibold text-gray-700'>Consultation</p>
                                <p className='text-[20px] font-semibold '><span className='text-2xl'>৳ </span>{fee}</p>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <p className='text-[20px] font-bold mt-2'>Availability</p>
                        <div className='flex gap-3'>
                            {
                                availability.map((a, ind) => <p key={ind} className='p-2 bg-[#5eeedd1c] text-[#14B8A6] rounded-md'>
                                    {a}
                                </p>)
                            }
                        </div>
                    </div>
                    <AppointmentBookingModal doctor={doctor}/>

                </div>
            </div>

        </div>
    );
};

export default DoctorDetails;