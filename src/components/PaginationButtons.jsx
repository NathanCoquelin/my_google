"use client";

import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { usePathname, useSearchParams } from "next/navigation";
import React from 'react'
import Link from 'next/link';

export default function PaginationButtons() {

    const pathname = usePathname();
    const searchParam = useSearchParams();
    const searchTerm = searchParam.get('searchTerms');

    const startIndex = +searchParam.get('start') || 1;

    return (
        <div className='text-blue-700 flex px-10 pb-4 justify-between sm:justify-start sm:space-x-44 sm:px-0'>
            {startIndex >= 10 && (
                <Link href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex - 10}`}>
                    <div className="flex flex-col cursor-pointer item-center hover:underline">
                        <BsChevronLeft />
                        <p className="">Previous</p>
                    </div>
                </Link>
            )}
            {startIndex <= 90 && (
                <Link href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex + 10}`}>
                    <div className="flex flex-col cursor-pointer item-center hover:underline">
                        <BsChevronRight />
                        <p className="">Next</p>
                    </div>
                </Link>
            )}
        </div>
    )
}
