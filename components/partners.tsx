import React from "react";
import { partners } from "@/constants/data";
import Image from "next/image";
import mutual from '@/public/home/old-mutual-logo.png'
import Title from "./title";

function Partner({ title, image }: { title?: string, image: string }) {
    return (
        <div className="border-2 h-48 border-purple-800 rounded-md flex justify-center items-center hover:shadow-lg hover:cursor-pointer">
            <Image unoptimized src={mutual} alt="" width={500} height={500} />
        </div>
    );
}

function Partners() {
    return (
        <div className="bg-purple-100 py-8 px-4 ">
            <div className="container mx-auto max-w-7xl">
                <Title title={'Event Partner'} color="text-purple-600" />
                <div className="container  mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
                    {
                        partners.map((partner) => (
                            <Partner image={partner.image} key={partner.id} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Partners;
