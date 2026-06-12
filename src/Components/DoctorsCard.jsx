import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DoctorsCard = ({ doctor }) => {
    const { name, image, hospital, specialty, _id } = doctor;
    return (
        <Card className='border border-[#14B8A6] flex flex-col items-center md:items-baseline'>
            <Image src={image} alt={name} height={220} width={440} className='h-55 w-110 object-contain object-center' />
            <div className='grow'>
                <h3 className='text-2xl font-bold text-neutral-950'>{name}</h3>
                <p>Specialty: {specialty}</p>
                <p>Hospital: {hospital}</p>
            </div>
            <Link href={`/doctor/${_id}`}>
                <Button className={'rounded-[5px] bg-[#14B8A6]'}>View Details</Button>
            </Link>
        </Card>
    );
};

export default DoctorsCard;