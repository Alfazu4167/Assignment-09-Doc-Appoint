import BookingCard from '@/Components/BookingCard';
import ProfilePage from '@/Components/ProfilePage';
import { auth } from '@/lib/auth';
import { getBookingData } from '@/lib/data';
import { Tabs } from '@heroui/react';
import { headers } from 'next/headers';
import Link from 'next/link';
export const metadata = {
  title: "DashBoard | Doc Appoint",
  description: "Appoint best doctor for your Disease",
};
const DashBoardPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers()
  })
  const { token } = await auth.api.getToken({
    headers: await headers()
  })
  const user = session?.user;

  console.log(token);
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/bookings/${user?.id}`,
    {
      headers: {
        authorization: `Bearer ${token}`
      }
    });
  const bookings = await res.json();

  return (
    <div className=' 
   mx-5 md:ml-40 lg:ml-80 mt-10'>
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
          <div className=''>
            {bookings.length === 0 ? <div className='px-15 min-h-[40vh] flex flex-col justify-center items-center rounded-md bg-[#EEF7FF] my-5'>
              <h2 className='text-3xl font-bold text-center'>No Appointment Booked Yet</h2>
              <p className='text-muted text-center'><Link href={'/all-appointment'} className='underline '>Click</Link> to Book an Appointment</p>
            </div> :
              bookings.map(booking => <BookingCard key={booking._id} booking={booking}></BookingCard>)}
          </div>
        </Tabs.Panel>
        <Tabs.Panel className="pt-4" id="profile">
          <ProfilePage />
        </Tabs.Panel>
      </Tabs>
    </div>
  );
};

export default DashBoardPage;