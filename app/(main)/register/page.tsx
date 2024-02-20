import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function Register() {
    return (
        <div className={`bg-[url('/register.jpg')] h-full w-full bg-purple-200 py-4 text-white flex items-center justify-center`}>
            <div className="border border-white w-auto h-auto py-4 rounded">
                <p className="text-lg md:text-2xl p-4 font-bold">Visitor</p>
                <hr />
                <p className="px-4 pt-2 font-bold">Participant information</p>

                {/* Name */}

                <div className="flex items-start justify-between gap-4 px-4 mt-4">
                    <p className="text-xs">Name</p>
                    <div className="">
                        <div className="flex flex-col">
                            <input id='prefix' className='bg-transparent border rounded' />
                            <label htmlFor="prefix" className='text-xs'>Prefix</label>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex flex-col">
                                <input id='prefix' className='bg-transparent border rounded' />
                                <label htmlFor="prefix" className='text-xs'>Prefix</label>
                            </div>
                            <div className="flex flex-col">
                                <input id='prefix' className='bg-transparent border rounded' />
                                <label htmlFor="prefix" className='text-xs'>Prefix</label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Email */}
                <div className="flex items-start justify-between gap-4 px-4 mt-4">
                    <p className="text-xs">Email Address</p>
                    <div className="flex flex-col flex-1">
                        <input id='prefix' className='bg-transparent border rounded' />
                        <label htmlFor="prefix" className='text-xs'>Prefix</label>
                    </div>
                </div>


                {/* Phone Number */}
                <div className="flex items-start justify-between gap-4 px-4 mt-4">
                    <p className="text-xs">Phone Number</p>
                    <div className="flex gap-4">
                        <div className="flex flex-col flex-1">
                            <input id='prefix' className='bg-transparent border rounded' />
                            <label htmlFor="prefix" className='text-xs'>Phone Number</label>
                        </div>
                        <div className="flex flex-col flex-1">
                            <input id='prefix' className='bg-transparent border rounded' />
                            <label htmlFor="prefix" className='text-xs'>Phone Number</label>
                        </div>
                    </div>
                </div>

                {/* Billing */}
                <div className="flex items-start justify-between gap-4 px-4 mt-4">
                    <p className="text-xs">Billing Address</p>
                    <div className="">
                        <div className="flex flex-col flex-1">
                            <input id='prefix' className='bg-transparent border rounded' />
                            <label htmlFor="prefix" className='text-xs'>Street Address</label>
                        </div>
                        <div className="flex flex-col flex-1">
                            <input id='prefix' className='bg-transparent border rounded' />
                            <label htmlFor="prefix" className='text-xs'>Street Address Line 2</label>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex flex-col flex-1">
                                <input id='prefix' className='bg-transparent border rounded' />
                                <label htmlFor="prefix" className='text-xs'>Phone Number</label>
                            </div>
                            <div className="flex flex-col flex-1">
                                <input id='prefix' className='bg-transparent border rounded' />
                                <label htmlFor="prefix" className='text-xs'>Phone Number</label>
                            </div>
                        </div>
                        <div className="flex flex-col flex-1">
                            <input id='prefix' className='bg-transparent border rounded' />
                            <label htmlFor="prefix" className='text-xs'>Phone Number</label>
                        </div>
                    </div>
                </div>

                {/* Coupon */}
                <div className="flex items-start justify-between gap-4 px-4 mt-4">
                    <p className="text-xs">Enter coupon</p>
                    <div className="flex flex-col">
                        <input id='prefix' className='bg-transparent border rounded' />
                        <label htmlFor="prefix" className='text-xs'>Prefix</label>
                    </div>
                </div>

                {/* Button */}
                <div className="flex gap-2 p-4 justify-end">
                    <Button variant={'outline'} className='text-black'>Save</Button>
                    <Button>
                        <Link href={'/payment'}>
                            Continue
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Register