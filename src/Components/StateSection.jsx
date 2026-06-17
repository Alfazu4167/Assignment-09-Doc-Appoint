import Image from 'next/image';
import React from 'react';
import review from '../assets/review.png'
import clock from '../assets/clock.png'
import doctor from '../assets/doctor.png'
import user from '../assets/active-user.png'
import { BsFillStarFill } from 'react-icons/bs';

const FeaturedSection = () => {
    return (
        <div className='bg-[#EEF7FF] mx-auto py-7 mt-20'>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 '>
                <div className='flex flex-col justify-center items-center my-5'>
                    <div className='w-27 h-27 flex items-center justify-center rounded-full border-2 border-[#14B8A6] p-7 bg-white shadow-sm'>
                        <Image src={doctor} alt='doctor-icon' height={80} width={80} className=' hue-rotate-180 contrast-125 brightness-110 object-cover' />
                    </div>
                    <h2 className='text-2xl font-bold'>15+</h2>
                    <p className='text-muted'>BMDC verified doctors</p>
                </div>
                <div className='flex flex-col justify-center items-center my-5'>
                    <div className='w-27 h-27 flex items-center justify-center rounded-full border-2 border-[#14B8A6] p-7 bg-white shadow-sm'>
                        <Image src={user} alt='user-icon' height={80} width={80} className=' hue-rotate-180 contrast-125 brightness-110 object-cover' />
                    </div>
                    <h2 className='text-2xl font-bold'>1500+</h2>
                    <p className='text-muted'>People believe on us</p>
                </div>
                <div className='flex flex-col justify-center items-center my-5'>
                    <div className='w-27 h-27 flex items-center justify-center rounded-full border-2 border-[#14B8A6] p-7 bg-white shadow-sm'>
                        <Image src={clock} alt='clock-icon' height={80} width={80} className=' hue-rotate-180 contrast-125 brightness-110 object-cover' />
                    </div>
                    <h2 className='text-2xl font-bold'>10+</h2>
                    <p className='text-muted'>Average waiting time</p>
                </div>
                <div className='flex flex-col justify-center items-center my-5'>
                    <div className='w-27 h-27 flex items-center justify-center rounded-full border-2 border-[#14B8A6] p-7 bg-white shadow-sm'>
                        <Image src={review} alt='review-icon' height={80} width={80} className=' hue-rotate-180 contrast-125 brightness-110 object-cover' />
                    </div>
                    <h2 className='text-2xl font-bold flex gap-3 items-center'><span><BsFillStarFill className='text-yellow-500' /></span>4.8+</h2>
                    <p className='text-muted'>Rating on 1.2k Reviews</p>
                </div>
            </div>
        </div>
    );
};

export default FeaturedSection;