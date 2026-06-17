// app/not-found.js (Next.js 13+ with App Router)
// or pages/404.js (Next.js 12 with Pages Router)

import Link from "next/link";

export default function NotFound() {
    return (
         <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-4 text-center">
      <div className="relative">
        <h1 className="text-9xl font-extrabold text-slate-200 tracking-widest select-none">
          404
        </h1>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#00a884] text-white px-4 py-1 text-sm font-semibold rounded rotate-12 shadow-md">
          Page Not Found
        </div>
      </div>

      <div className="mt-8 max-w-md">
        <h2 className="text-3xl font-bold text-slate-800 mb-3">
          Looks like you are lost!
        </h2>
        <p className="text-slate-600 mb-8 leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Our doctors are ready to help, but this page is not!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
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
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            Back to Home
          </Link>

          <Link
            href="/all-appointment"
            className="w-full sm:w-auto px-6 py-3 border border-slate-300 hover:border-slate-400 bg-white text-slate-700 hover:text-slate-800 font-medium rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
          >
            Find a Doctor
          </Link>
        </div>
      </div>

      <p className="absolute bottom-6 text-sm text-slate-400">
        Need urgent medical assistance? Hotline: <span className="font-semibold text-slate-500">16247</span>
      </p>
    </div>
    );
}
