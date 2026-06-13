import { Button, Card, Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const DoctorsCard = ({ doctor }) => {
    const { name, image, description, specialty, _id, fee, rating } = doctor;

    return (
        <Card className='border border-[#14B8A6] transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl shadow-xl relative'>
            <Image src={image} alt={name} height={220} width={440} className='h-55 w-110 object-contain object-center' />
            <Chip className='rounded-[5px] absolute right-3 top-2'><span className='text-yellow-500'> <FaStar /></span> {rating}</Chip>
            <div className='grow'>
                <h3 className='text-2xl font-bold text-neutral-950'>{name}</h3>
                <p>Specialty: {specialty}</p>
                <p className='text-gray-600'> {description}</p>


            </div>
             <Separator className="my-4" />
            <div className='flex justify-between items-center'>
                <div>
                    <p>Consultation:</p>
                    <p className='text-xl font-bold text-[#14B8A6] '><span className='font-xl font-bold text-neutral-950'>৳</span> {fee}</p>
                </div>
                <Link href={`/doctor/${_id}`}>
                    <Button className={'rounded-[5px] bg-[#14B8A6]'}>View Details</Button>
                </Link>
            </div>
        </Card>
    );
};

export default DoctorsCard;