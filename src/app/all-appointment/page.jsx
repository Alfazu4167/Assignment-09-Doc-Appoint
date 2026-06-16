
import { getDoctorsData } from '../../lib/data';
import DoctorsCard from '@/Components/DoctorsCard';
import { Label, SearchField } from '@heroui/react';
import SearchDoctor from '@/Components/SearchDoctor';

const AllAppointmentPage = async ({ searchParams }) => {
    const sp = await searchParams;
    console.log(sp);
    const doctors = await getDoctorsData(sp.search)
    console.log(doctors);
    return (
        <div className='container mx-auto'>
            <div className='mt-10 text-center'>
                <h2 className='text-3xl font-bold'>All Appointment</h2>
                <p className='text-muted'>Find best doctor's for your consultation</p>
                <SearchDoctor />
            </div>



            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
                {
                    doctors.map(doctor => <DoctorsCard key={doctor._id} doctor={doctor}></DoctorsCard>)
                }
            </div>
        </div>
    );
};

export default AllAppointmentPage;