'use client'
import Link from "next/link";
import React from "react";
import { MdArrowRight } from "react-icons/md";
import { useAuthState } from 'react-firebase-hooks/auth'
import Title from "@/components/title";
import { Color } from "@/constants/color";

function PriceList({ title, list1, list2 }: { title: string, list1: string, list2: string }) {
    return (
        <div className="flex justify-between">
            <h1 className="text-xs md:text-lg font-bold text-purple-500">{title}</h1>
            <div className="flex gap-40 text-lg font-bold text-purple-500">
                <h1 className="text-sm md:text-lg">{list1}</h1>
                <h1 className="text-sm md:text-lg">{list2}</h1>
            </div>
        </div>
    );
}

function Details({ text }: { text: string }) {

    return (
        <div className="container max-auto max-w-7xl mt-4">
            <div className="flex gap-2 items-center">
                <MdArrowRight className="text-2xl text-purple-600" />
                <h1 style={{ color: Color.text }}>{text}</h1>
            </div>
        </div>
    );
}


function Price() {
    // const [user, loading] = useAuthState(auth)
    return (
        <div className='bg-purple-200 py-2'>
            <div className='container mx-auto max-w-7xl py-8 '>
                <Title color="text-purple-600" title={'Evolve Summit Pricing'} />
                <div className="my-4">
                    <h1 className="p-2 w-full text-white font-bold md:text-2xl bg-purple-500 rounded">
                        2 days conference registration
                    </h1>
                </div>
                <div className='grid grid-cols-5'>
                    <div className='col-span-1'>
                        <div className=''>
                            <div className='h-14'>

                            </div>
                        </div>
                        <div className='text-sm text-purple-500 font-bold'>
                            Day
                        </div>
                        <div className='my-2 text-sm text-purple-500 font-bold'>
                            Day with accommodation
                        </div>
                    </div>
                    <div className='flex justify-between col-span-4'>
                        <div className=''>
                            <div className="">
                                <h1 className="font-bold text-lg md:text-2xl" style={{ color: Color.colorBg }}>Early Birds</h1>
                                <h1 className="text-xs md:text-sm text-end text-gray-500"><span className="hidden md:flex">Before</span> March 20, 2024</h1>
                            </div>
                            <div className='mt-3 text-end'>
                                <p className='text-sm text-purple-500 font-bold'>$100</p>
                            </div>
                            <div className='mt-4 text-end'>
                                <p className='text-sm text-purple-500 font-bold'>$300</p>
                            </div>
                        </div>
                        <div className=''>
                            <div className="">
                                <h1 className="font-bold text-lg md:text-2xl" style={{ color: Color.colorBg }}>Registration Fee</h1>
                                <h1 className="text-sm text-end text-gray-500">Starts Mar 20, 2024</h1>
                            </div>
                            <div className='mt-2 text-end'>
                                <p className='text-sm text-purple-500 font-bold'>$200</p>
                            </div>
                            <div className='mt-4 text-end'>
                                <p className='text-sm text-purple-500 font-bold'>$500</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Details
                text="At this stage, the event is planned to be hosted onsite. If required, further options will be considered while approaching the event dates."
            />
            <Details text="VAT at 5% to be added to the registration fees." />

            <Details text="Registration fees cover the access to the conference, the conference materials and documents and catering (lunch and coffee breaks)." />
            <Details text="Student participant should be able to produce a valid student ID at the registration desk when requested." />
            <Details text="Company Employee even if he/she is a student cannot be considered as a 'Student Participant' and should register as 'Company Participant'." />
            <Details text="In case you registered to the conference, with the option of the payment of the registration fees by bank transfer, but you did not make the bank transfer before the early bird deadline, the standard registration fees rate should apply." />
            <div className="my-4 pr-4 flex justify-end">
                {/* {
                    user
                        ?
                        <Link
                            href="/payments"
                            className="py-2 px-4 bg-purple-600 text-white hover:scale-95 rounded-sm text-sm transition duration-1000"
                        >
                            Make Payment
                        </Link>
                        :
                        <Link
                            href="/auth/registry"
                            className="py-2 px-4 bg-purple-600 text-white hover:scale-95 rounded-sm text-sm transition duration-1000"
                        >
                            Register to pay
                        </Link>
                } */}
            </div>
        </div>
    )
}

export default Price