import React from "react";
import EventSchedule from "./schedule";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function SecondTab() {
    return (
        <div>
            <div className="">
                <h1 className="my-2 font-bold text-lg text-purple-500">Summit Day 2</h1>
                <div className="mb-6">
                    <EventSchedule text="  8:00 - 8:30 Arrival and Registration" />
                    <EventSchedule text=" 8:30 – 9:30  Welcome Minister ICT and Courier Services" />
                    <EventSchedule text="9:30 – 10:30 Hon President" />
                    <h1 className="my-2 font-bold text-sm text-purple-500">
                        Option of having tea if Presidium is exiting
                    </h1>
                    <EventSchedule text="10:30 -11:15  Second speaker - Potraz" />
                    <EventSchedule text="11:15 – 11:45 Teas" />
                    <EventSchedule text="11:45 – 12:30  ICT Banking / Finance / Insurance)" />
                    <EventSchedule text="13:00 – 14:00 Lunch" />
                    <EventSchedule text="14:00 - 14:30  ICT Trade and Tourism" />
                    <EventSchedule text="14:30 – 15:00  ICT Communication Sector" />
                    <EventSchedule text="15:00 – 15:30 Panel Discussion (Blend Moderator & Q&A)" />
                    <EventSchedule text="15:30 – 16:00  Keynote Speaker" />
                    <EventSchedule text="16:00 – 16:15  Simon/Mr E. Nyamuda" />
                </div>
                <EventSchedule text="17:00 - 20.00 Cocktail & Exhibition Stands View - Simple Entertainmnent" />
                <div className="mt-4">
                    <Button className="border rounded bg-purple-600 hover:bg-purple-500">
                        <Link href={'/auth/register'}>Register</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default SecondTab;
