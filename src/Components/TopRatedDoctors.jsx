import { getTopDoctors } from '@/lib/data';
import React from 'react';
import DoctorsCard from './DoctorsCard';

const TopRatedDoctors = async () => {
    const doctors = await getTopDoctors()

    return (
        <div className='container mx-auto my-15 p-5 lg:p-0'>
            <h2 className='text-3xl font-bold mb-5'>Top Rated Doctors</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    doctors.map(doctor => <DoctorsCard key={doctor._id} doctor={doctor} />)
                }
            </div>
        </div>
    );
};

export default TopRatedDoctors;