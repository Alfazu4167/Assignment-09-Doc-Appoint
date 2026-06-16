import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className="bg-[url('../assets/hero.jpg')] bg-cover bg-center text-white h-140 flex justify-center p-10 flex-col space-y-3">
            <h2 className='text-4xl  font-bold text-slate-900  max-w-xl '>
                Find a <span className='text-white drop-shadow-sm'>Doctor</span> And <br /> Book An <span className='text-white drop-shadow-sm'>Appointment</span>
            </h2>
            <p className='max-w-3xl'>Connecting you with expert medical specialists. Quality healthcare and personalized medical consultations are now just a click away.</p>
            <Link href={'/all-appointment'}>
                <Button className={'bg-[#14B8A6] rounded-[5px] text-white border border-white'}>Book an Appointment Now <FaArrowRight /></Button>
            </Link>
        </div>
    );
};

export default Banner;