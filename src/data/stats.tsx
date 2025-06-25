import { BsFillStarFill,BsFillCalendar2CheckFill } from "react-icons/bs";
import { PiUsersThreeFill } from "react-icons/pi";
import { IStats } from "@/types";

export const stats: IStats[] = [
    {
        title: "10K+",
    icon: <PiUsersThreeFill size={34} className="text-purple-600" />,
    description: "Happy event organizers who've booked through our platform."

    },
    {
        title: "4.9",
    icon: <BsFillStarFill size={34} className="text-yellow-500" />,
    description: "Average artist rating based on thousands of client reviews."

    },
     {
    title: "8K+",
    icon: <BsFillCalendar2CheckFill size={34} className="text-blue-500" />,
    description: "Successful bookings completed across weddings, corporate events, and festivals."
  }
];