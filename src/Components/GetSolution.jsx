import stethoscope from '../assets/stethoscope.jpg'
import calender from '../assets/calender.png'
import searchIcon from '../assets/search.png'
import Image from 'next/image';
import { Card } from '@heroui/react';

const GetSolution = () => {
    return (
        <div className='container mx-auto mt-10 p-5'>
            <h2 className='text-3xl font-bold text-center mb-5'>3 Easy Steps and Get Your Solution</h2>
            <div className='grid lg:grid-cols-3 gap-x-10'>
                <div className='shadow-2xl p-5 rounded-md flex flex-col justify-center items-center'>
                    <div className='w-27 h-27 flex items-center justify-center rounded-full border-2 border-[#14B8A6] p-7 bg-white shadow-sm'>
                        <Image
                            src={searchIcon} alt='searchIcon' width={80} height={80} className='object-contain'
                        />
                    </div>

                    <h2 className='text-2xl font-bold'>Find best doctor's</h2>
                    <p className='text-muted max-w-3xl'>Find your doctor easily with a minimum of effort. We've
                        kept everything organized for you.</p>
                </div>
                <div className='shadow-2xl p-5 rounded-md flex flex-col justify-center items-center'>
                    <div className='w-27 h-27 flex items-center justify-center rounded-full border-2 border-[#14B8A6] p-7 bg-white shadow-sm'>
                        <Image
                            src={calender} alt='calender Icon' width={80} height={80} className='object-contain'
                        />
                    </div>

                    <h2 className='text-2xl font-bold'>Get Appointment</h2>
                    <p className='text-muted max-w-3xl'>Ask for an appointment of the doctor quickly with almost a
                        single click. We take care of the rest.</p>
                </div>
                <div className='shadow-2xl p-5 rounded-md flex flex-col justify-center items-center'>
                    <div className='w-27 h-27 flex items-center justify-center rounded-full border-2 border-[#14B8A6] p-7 bg-white shadow-sm'>
                        <Image
                            src={stethoscope} alt='stethoscope icon' width={80} height={80} className='object-contain'
                        />
                    </div>

                    <h2 className='text-2xl font-bold'>Happy Consultations</h2>
                    <p className='text-muted max-w-3xl'>Do consultations and take the service based on your
                        appointment. Get back to good health</p>
                </div>
            </div>
        </div>
    );
};

export default GetSolution;