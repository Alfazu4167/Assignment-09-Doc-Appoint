'use client'
import { Label, SearchField } from "@heroui/react";
import { useState } from "react";


const SearchDoctor = () => {
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState([])
    console.log(search);
    const fetchDoctors = async () => {
        setLoading(true)
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/search?name=${search}`);
        const data = await res.json();
        setResult(data)
        setLoading(false)
    }
    return (
        <div>
            <SearchField name="search">
                <Label>Search</Label>
                <SearchField.Group className={'border rounded'}>
                    <SearchField.SearchIcon />
                    <SearchField.Input className="w-70" placeholder="Search doctor by name..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)} />
                    <SearchField.ClearButton />
                </SearchField.Group>
            </SearchField>
            {result.length > 0 && (
                <div className="absolute top-full left-0 w-full bg-white border border-slate-200 mt-2 rounded-xl shadow-lg z-50 max-h-60 overflow-y-auto">
                    {result.map((doctor) => (
                        <div
                            key={doctor._id}
                            className="p-4 hover:bg-teal-50 cursor-pointer border-b border-slate-100 last:border-0 flex justify-between items-center transition"
                        >
                            <div>
                                <h4 className="font-bold text-slate-900">{doctor.name}</h4>
                                <p className="text-xs text-slate-500">{doctor.specialty || "General Physician"}</p>
                            </div>
                            <button className="text-sm bg-[#14B8A6] text-white px-3 py-1.5 rounded-full font-medium hover:bg-teal-600">
                                Book
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {/* কোনো ডাক্তার না পাওয়া গেলে */}
            {search && result.length === 0 && !loading && (
                <div className="absolute top-full left-0 w-full bg-white p-4 text-center text-sm text-slate-500 rounded-xl shadow-lg mt-2">
                    No doctors found.
                </div>
            )}
        </div>
    );
};

export default SearchDoctor;