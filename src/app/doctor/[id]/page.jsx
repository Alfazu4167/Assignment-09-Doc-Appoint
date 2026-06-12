import { getDoctorsDataById } from '@/app/lib/data';
import React from 'react';

const DoctorDetails = async ({params}) => {
    const {id} = await params;
    const doctor = await getDoctorsDataById(id);
    console.log(doctor);

    return (
        <div>
            
        </div>
    );
};

export default DoctorDetails;