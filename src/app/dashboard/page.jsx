import BookingCard from '@/Components/BookingCard';
import { auth } from '@/lib/auth';
import { getBookingData } from '@/lib/data';
import { Tabs } from '@heroui/react';
import { headers } from 'next/headers';
import React from 'react';

const DashBoardPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers()
  })
  const user = session?.user;
  console.log(user);
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/bookings/${user?.id}`);
  const bookings = await res.json();
  console.log(bookings);
  return (
    <div className=' ml-80 my-10'>
      <h2 className='text-3xl font-bold  mb-5'>DashBoard</h2>
      <Tabs className="max-w-md">
        <Tabs.ListContainer >
          <Tabs.List aria-label="Options" >
            <Tabs.Tab id="bookings" >
              My Bookings
              <Tabs.Indicator />
            </Tabs.Tab>
            <Tabs.Tab id="profile" className=''>
              My Profile
              <Tabs.Indicator />
            </Tabs.Tab>
          </Tabs.List>
        </Tabs.ListContainer>
        <Tabs.Panel className="pt-4" id="bookings">
          <div className='my-3'>
            {bookings.map(booking => <BookingCard key={booking._id} booking={booking}></BookingCard>)}
          </div>
        </Tabs.Panel>
        <Tabs.Panel className="pt-4" id="profile">
          <p>Profile</p>
        </Tabs.Panel>
      </Tabs>
    </div>
  );
};

export default DashBoardPage;