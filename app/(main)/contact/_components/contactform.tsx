import { Color } from '@/constants/color'
import React from 'react'

function Contactform() {
    return (
        <div className="">
            <div className="container mx-auto max-w-7xl my-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="font-bold text-2xl md:text-4xl text-purple-400">
                        Please Send Us Your Enquiry
                    </h1>
                    <form action="" className="flex flex-col gap-4 w-full px-4">
                        <div className="flex flex-col md:flex-row gap-4 mt-6">
                            <input
                                type="text"
                                placeholder="First Name"
                                className="border w-full border-purple-300 py-2 px-4 outline-purple-400 text-sm placeholder:text-sm "
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="border border-purple-300 py-2 px-4 outline-purple-400 text-sm placeholder:text-sm "
                            />
                        </div>
                        <input
                            type="email"
                            placeholder="Email"
                            className="border border-purple-300 py-2 px-4 outline-purple-400 text-sm placeholder:text-sm "
                        />
                        <textarea
                            placeholder="Message"
                            rows={6}
                            className="border border-purple-300 py-2 px-4 outline-purple-400 text-sm placeholder:text-sm "
                        />
                        <button
                            type="submit"
                            className="text-white bg-purple-600 rounded-sm py-2 px-4 hover:scale-95 transition duration-1000"
                        >
                            Send Message
                        </button>
                    </form>
                </div>


                <div className="container px-4 md:px-0 mx-auto max-w-7xl flex flex-col justify-center items-center">
                    <div className="border border-purple-600 rounded-lg">
                        <div className="border-b-2 border-purple-600  max-w-7xl container mx-auto text-center p-4">
                            <h1 className="font-bold text-lg text-purple-500 ">
                                Our Contact Details
                            </h1>
                        </div>

                        <div className="max-w-7xl container mx-auto py-4 px-12 border-b-2 border-purple-200">
                            <h1 className="text-sm" style={{ color: Color.text }}>info@compulink.co.zw</h1>
                        </div>
                        <div className="max-w-7xl container mx-auto py-4 px-12 border-b-2 border-purple-200">
                            <h1 className="text-sm" style={{ color: Color.text }}>www.compulink.co.zw</h1>
                        </div>
                        <div className=" max-w-7xl container mx-auto py-4 px-12">
                            <h1 className="text-sm font-bold text-purple-500">Office Address</h1>
                        </div>
                        <div className=" max-w-7xl container mx-auto py-4 px-12 border-b-2 border-purple-200">
                            <h1 className="text-sm" style={{ color: Color.text }}>
                                313 Samora Machel East, Eastlea, Harare Zimbabwe
                            </h1>
                        </div>
                        <div className=" max-w-7xl container mx-auto py-4 px-12">
                            <h1 className="text-sm font-bold text-purple-500">Our Contact Details</h1>
                        </div>
                        <div className=" max-w-7xl container mx-auto py-4 px-12 border-b-2 border-purple-200">
                            <h1 className="text-sm" style={{ color: Color.text }}>Tel: +263 242 494407, 08677 105 028</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactform