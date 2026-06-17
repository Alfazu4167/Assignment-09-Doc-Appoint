import Image from 'next/image';
import logo from '../assets/logo.svg'
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-[#47b3a262] p-10 min-h-[40vh]'>
            <div className='flex flex-col lg:flex-row justify-between gap-5'>
                <div className="flex gap-3 items-center">
                    <Image src={logo} alt="Doc Appoint" height={50} width={50} />
                    <h2 className="text-2xl font-bold ">Doc <span className="text-[#14B8A6]">Appoint</span></h2>
                </div>
                <div className='my-3'>
                    <h4 className='text-xl font-semibold'>Quick Links</h4>
                    <Link href={'/'}><p className='text-muted underline'>Home</p></Link>
                    <Link href={'/all-appointment'}><p className='text-muted underline'>All Appointment</p></Link>
                    <Link href={'/dashboard'}><p className='text-muted underline'>DashBoard</p></Link>
                </div>
                <div>
                    <h2 className='text-xl font-semibold'>Social Links</h2>
                    <ul className='flex items-center gap-3 mt-3'>
                        
                        <li className='text-muted p-2 rounded-full bg-white shadow-md'><a href=""><FaLinkedin /></a></li>
                        <li className='text-muted p-2 rounded-full bg-white shadow-md'><a href=""><FaTwitter /></a></li>
                        <li className='text-muted p-2 rounded-full bg-white shadow-md'><a href=""><FaFacebook /></a></li>
                        <li className='text-muted p-2 rounded-full bg-white shadow-md'><a href=""><FaInstagram /></a></li>
                    </ul>
                </div>
            </div>
            <p className='text-muted text-center'>
                © 2026 Doc Appoint. All Rights Reserved. <br />
                By using this platform, you agree to our Terms & Conditions and Privacy Policy.
            </p>
        </div>
    );
};

export default Footer;