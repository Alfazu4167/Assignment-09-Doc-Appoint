import React from 'react';
import { getDoctorsData } from '../lib/data';
import DoctorsCard from '@/Components/DoctorsCard';

const AllAppointmentPage =async () => {
    const doctors = await getDoctorsData()
    console.log(doctors);
    return (
        <div className='container mx-auto'>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-15'>
                {
                    doctors.map(doctor=><DoctorsCard key={doctor._id} doctor={doctor}></DoctorsCard>)
                }
            </div>
        </div>
    );
};

export default AllAppointmentPage;