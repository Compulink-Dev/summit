import Title from "@/components/title";
import { Color } from "@/constants/color";
import React from "react";


function Subscribe() {
    return (
        <div className="my-8  px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto max-w-7xl  gap-4">
                <div className="">
                    <Title title={'Subscribe Now:'} color="text-purple-600" />
                    <h1 className="text-sm mt-4" style={{ color: Color.text }}>
                        The ICT is proud to produce a number of academic publications and
                        events. To subscribe to all ICT Publications, please provide your
                        email.
                    </h1>
                    <h1 className="text-sm mt-2" style={{ color: Color.text }}>
                        The ICT will securely store your information as part of our contact
                        group and will never share your details with any third party.
                    </h1>
                </div>
                <form className="flex flex-col gap-4 justify-center">
                    <input
                        type="email"
                        name=""
                        id=""
                        placeholder="Email"
                        className="bg-purple-200 py-2 px-4 rounded-sm outline-purple-400 placeholder:text-sm"
                    />
                    <button
                        type="submit"
                        className="py-2 px-4 bg-purple-600 text-white rounded-sm hover:bg-purple-400 hover:scale-95 text-sm transition duration-1000"
                    >
                        Send Email
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Subscribe;
