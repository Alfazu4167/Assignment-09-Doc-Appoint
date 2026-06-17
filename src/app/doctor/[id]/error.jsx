'use client';

import { useEffect } from 'react';
import Link from 'next/link'; // এখানে Link ইমপোর্ট করা হয়েছে

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-4 text-center">
      <div className="relative">
        <h1 className="text-9xl font-extrabold text-slate-200 tracking-widest select-none">
          500
        </h1>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#00a884] text-white px-4 py-1 text-sm font-semibold rounded rotate-12 shadow-md whitespace-nowrap">
          Something Went Wrong
        </div>
      </div>

      <div className="mt-8 max-w-md">
        <h2 className="text-3xl font-bold text-slate-800 mb-3">
          System Connection Issue!
        </h2>
        <p className="text-slate-600 mb-8 leading-relaxed">
          An unexpected error occurred while processing your request. Please try refreshing the page or check back shortly. Our technical team is on it!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto px-6 py-3 bg-[#00a884] hover:bg-[#009171] text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
          >
            <svg
              xmlns="http://w3.org"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
            Try Again
          </button>

          {/* <a> ট্যাগ পরিবর্তন করে <Link> ব্যবহার করা হয়েছে */}
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 border border-slate-300 hover:border-slate-400 bg-white text-slate-700 hover:text-slate-800 font-medium rounded-lg transition-all duration-200 flex items-center justify-center text-center"
          >
            Go to Home
          </Link>
        </div>
      </div>

      <p className="absolute bottom-6 text-sm text-slate-400">
        Need urgent support? Hotline: <span className="font-semibold text-slate-500">16247</span>
      </p>
    </div>
  );
}
