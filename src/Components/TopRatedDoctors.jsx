import { getTopDoctors } from '@/lib/data';
import React from 'react';
import DoctorsCard from './DoctorsCard';
import { Button } from '@heroui/react';
import { FaArrowRightArrowLeft } from 'react-icons/fa6';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

const TopRatedDoctors = async () => {
    const doctors = await getTopDoctors()

    return (
        <div className='container mx-auto mt-10 p-5 lg:p-0'>
            <div className='flex justify-between items-center mb-5'>
                <h2 className='text-3xl font-bold mb-5'>Top Rated Doctors</h2>
                <Link href={'/all-appointment'}><Button variant='outline' className={'rounded-[10px] border border-[#14B8A6] text-[#14B8A6]'}>Show All Doctors <FaArrowRight /></Button></Link>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    doctors.map(doctor => <DoctorsCard key={doctor._id} doctor={doctor} />)
                }
            </div>
        </div>
    );
};

export default TopRatedDoctors;