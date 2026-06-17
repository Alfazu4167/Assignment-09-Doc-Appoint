'use client'
import { useState } from "react";
import { Link, Button, Avatar } from "@heroui/react";
import Image from "next/image";
import logo from '../assets/logo.svg'
import { authClient } from "@/lib/auth-client";
import { Router } from "next/router";
import { FadeLoader, PulseLoader } from "react-spinners";

export default function Navbar() {

    const { data: session, isPending } = authClient.useSession()
    const user = session?.user;

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const li = <>
        <li>
            <Link href="/">Home</Link>
        </li>
        <li>
            <Link href="/all-appointment">All Appointment</Link>
        </li>
        <li>
            <Link href="/dashboard">DashBoard</Link>
        </li>
    </>

    return (
        <nav className="sticky top-0 z-40 w-full border-b border-separator backdrop-blur-lg">
            <header className="flex h-16 items-center justify-between px-6">
                <div className="flex items-center gap-4">
                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className="sr-only">Menu</span>
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                    <div className="flex gap-3 items-center">
                        <Image src={logo} alt="Doc Appoint" height={50} width={50} referrerPolicy='no-referrer'/>
                        <h2 className="text-2xl font-bold hidden md:block">Doc <span className="text-[#14B8A6]">Appoint</span></h2>
                    </div>
                </div>


                <ul className="hidden items-center gap-4 md:flex">
                    {li}
                </ul>


                <div className="flex items-center">
                    {isPending ? (
                        <PulseLoader />
                    ) : user ? (
                        <div className='flex gap-3 items-center'>
                            <Avatar>
                                <Avatar.Image alt={user?.name} src={user?.image} />
                                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                            </Avatar>
                            <Button onClick={async () => await authClient.signOut()} className='rounded-[5px] bg-[#14B8A6]'>
                                Logout
                            </Button>
                        </div>
                    ) : (
                        <div className="flex gap-3">
                            <Link href="/login">
                                <Button className='rounded-[5px] bg-[#14B8A6]'>Login</Button>
                            </Link>
                            <Link href="/register">
                                <Button className='rounded-[5px] bg-[#14B8A6]'>Register</Button>
                            </Link>
                        </div>
                    )}
                </div>
            </header>


            {isMenuOpen && (
                <div className="border-t border-separator md:hidden">
                    <ul className="flex flex-col gap-2 p-4">
                        {li}
                    </ul>
                </div>
            )}
        </nav >
    );
}
