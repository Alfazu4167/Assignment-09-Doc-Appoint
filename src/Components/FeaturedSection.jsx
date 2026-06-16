import Image from 'next/image';
import React from 'react';
import review from '../assets/review.png'
import clock from '../assets/clock.png'
import doctor from '../assets/doctor.png'
import user from '../assets/active-user.png'
import { BsFillStarFill } from 'react-icons/bs';

const FeaturedSection = () => {
    return (
        <div className='bg-[#EEF7FF] mx-auto py-5'>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 '>
                <div className='flex flex-col justify-center items-center my-3'>
                    <Image src={doctor} alt='doctor-icon' className='w-25 h-25 p-5 rounded-full bg-white hue-rotate-180 contrast-125 brightness-110 object-cover' />
                    <h2 className='text-2xl font-bold'>15+</h2>
                    <p className='text-muted'>BMDC verified doctors</p>
                </div>
                <div className='flex flex-col justify-center items-center my-3'>
                    <Image src={user} alt='doctor-icon' className='w-25 h-25 p-5 rounded-full bg-white hue-rotate-180 contrast-125 brightness-110 object-cover' />
                    <h2 className='text-2xl font-bold'>1500+</h2>
                    <p className='text-muted'>People believe on us</p>
                </div>
                <div className='flex flex-col justify-center items-center my-3'>
                    <Image src={clock} alt='doctor-icon' className='w-25 h-25 p-5 rounded-full bg-white hue-rotate-180 contrast-125 brightness-110 object-cover' />
                    <h2 className='text-2xl font-bold'>10+</h2>
                    <p className='text-muted'>Average waiting time</p>
                </div>
                <div className='flex flex-col justify-center items-center my-3'>
                    <Image src={review} alt='doctor-icon' className='w-25 h-25 p-5 rounded-full bg-white hue-rotate-180 contrast-125 brightness-110 object-cover' />
                    <h2 className='text-2xl font-bold flex gap-3 items-center'><span><BsFillStarFill className='text-yellow-500'/></span>4.8+</h2>
                    <p className='text-muted'>Rating on 1.2k Reviews</p>
                </div>
            </div>
        </div>
    );
};

export default FeaturedSection;