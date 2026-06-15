
import { Button, Card } from '@heroui/react';
import React from 'react';
import { CiCalendar } from 'react-icons/ci';
import { FaRegUser } from 'react-icons/fa';
import { GoClock } from 'react-icons/go';
import EditBookingModal from './EditBookingModal';
import { DeleteAlert } from './DeleteAlert';

const BookingCard = async ({ booking }) => {

    console.log(booking);
    const { appointTime, doctorName, patientName, appointDate, reason } = booking;
    console.log(booking);
    return (
        <Card className='border border-[#14B8A6]'>
            <h2 className='text-2xl font-bold text-[#14B8A6] '>{doctorName}</h2>
            <p className='text-muted flex gap-3 items-center'> <FaRegUser />
                Patient Name: {patientName}</p>
            <p className='text-muted flex gap-3 items-center'><CiCalendar />
                Date: {appointDate}</p>
            <p className='text-muted flex gap-3 items-center'><GoClock />
                Time: {appointTime}</p>
            <p className='text-muted '>Reason: {reason}</p>
            <div className='flex gap-3'>
                <EditBookingModal booking={booking} />
                <DeleteAlert  booking={booking}/>
            </div>
        </Card>
    );
};

export default BookingCard;