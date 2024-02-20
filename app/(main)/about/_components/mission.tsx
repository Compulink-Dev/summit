import Title from "@/components/title";
import { Color } from "@/constants/color";
import { values } from "@/constants/data";
import React from "react";


const Card = ({ title, desc, paint, bgPaint }: { title: string, desc: string, paint: string, bgPaint: string }) => {
    return (
        <div className=" border-2 py-4 px-6 rounded-lg hover:shadow-lg" style={{ borderColor: `${bgPaint}` }}>
            <h1 className="text-lg md:text-2xl font-bold mb-4" style={{ color: `${paint}` }}>{title}</h1>
            <h1 className="text-sm" style={{ color: Color.text }}>
                {desc}
            </h1>
        </div>
    )
}

function Mission() {
    return (
        <div className="container mx-auto max-w-7xl my-8 px-4">
            <Title color="text-purple-600" title={'Evolve I.C.T Summit Core Values'} />
            <div className="container grid grid-cols-1 md:grid-cols-2 mx-auto max-w-7xl my-8 gap-4">
                {
                    values.map((value) => (
                        <Card
                            paint={value.paint}
                            bgPaint={value.paint}
                            title={value.title}
                            desc={value.paragraph}
                        />
                    ))
                }
            </div>

        </div>

    );
}

export default Mission;
