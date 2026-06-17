'use client'

import { Button, SearchField } from "@heroui/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { useState } from "react";
import { FiSearch } from "react-icons/fi";



const SearchDoctor = () => {
    const [searchInp, setSearchInp] = useState('')
    const searchParams = useSearchParams()
    const pathName = usePathname();
    const router = useRouter()
    const handleSearch = () => {
        const params = new URLSearchParams(searchInp);
        if (searchInp) {
            params.set("search", searchInp)
        } else {
            params.delete('search')
        }
        router.push(`${pathName}?${params}`)
    }
    return (
        <div className="text-center mt-5 flex flex-col gap-3 justify-center items-center">

            <SearchField name="search">

                <SearchField.Group>
                    <SearchField.SearchIcon />
                    <SearchField.Input className="w-[280px]" placeholder="Search Doctor by name..."
                        value={searchInp}
                        onChange={e => { setSearchInp(e.currentTarget.value) }}
                    />
                    <SearchField.ClearButton />
                </SearchField.Group>
            </SearchField>
            <Button variant="outline" className={'rounded-md p-5 border border-[#14B8A6] text-[#14B8A6]'} onClick={handleSearch}><FiSearch/>Search</Button>
        </div>
    );
};

export default SearchDoctor;