import React from 'react';
import { getDoctorsData } from '../../lib/data';
import DoctorsCard from '@/Components/DoctorsCard';
import { Label, SearchField } from '@heroui/react';
import SearchDoctor from '@/Components/SearchDoctor';

const AllAppointmentPage = async () => {
    const doctors = await getDoctorsData()
    // console.log(doctors);
    return (
        <div className='container mx-auto'>
            <div className='mt-10'>
                <h2 className='text-3xl font-bold'>All Appointment</h2>
                <p className='text-muted'>Find best doctor's for your consultation</p>
                <SearchDoctor/>
            </div>
           


            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-15'>
                {
                    doctors.map(doctor => <DoctorsCard key={doctor._id} doctor={doctor}></DoctorsCard>)
                }
            </div>
        </div>
    );
};

export default AllAppointmentPage;