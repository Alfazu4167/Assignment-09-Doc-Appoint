
import { getDoctorsData } from '../../lib/data';
import DoctorsCard from '@/Components/DoctorsCard';
import { Label, SearchField } from '@heroui/react';
import SearchDoctor from '@/Components/SearchDoctor';
export const metadata = {
    title: "All-Appointment | Doc Appoint",
    description: "Appoint best doctor for your Disease",
};
const AllAppointmentPage = async ({ searchParams }) => {
    const sp = await searchParams;
    console.log(sp);
    const doctors = await getDoctorsData(sp.search)

    return (
        <div className='container mx-auto p-5'>
            <div className='mt-10 text-center'>
                <h2 className='text-3xl font-bold'>All Appointment</h2>
                <p className='text-muted'>Find best doctor's for your consultation</p>
                <SearchDoctor />
            </div>


            {doctors.length === 0 ? <div className='px-15 min-h-[40vh] flex flex-col justify-center items-center rounded-md bg-[#EEF7FF] container mx-auto mt-5'>
                <h2 className='text-3xl font-bold text-center'>No Doctor's found</h2>
                <p className='text-muted text-center'> Try with different name</p>
            </div> :

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
                    {doctors.map(doctor => <DoctorsCard key={doctor._id} doctor={doctor}></DoctorsCard>)}
                </div>
            }
        </div>
    );
};

export default AllAppointmentPage;