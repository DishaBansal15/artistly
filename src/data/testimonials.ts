import { ITestimonial } from "@/types";
import { siteDetails } from "./siteDetails";

export const testimonials: ITestimonial[] = [
    {
        name: 'Aarav Mehta',
        role: 'Event Planner at Moments & More',
        message: `${siteDetails.siteName} made it incredibly easy to find the perfect DJ for our corporate gala. The platform's seamless booking process and professional talent options saved us days of work.`,
        avatar: '/images/testimonial-1.webp',
    },
    {
        name: 'Rahul Verma',
        role: 'Manager at The Grand Arena',
        message: `${siteDetails.siteName} is our go-to for booking headline performers. It's reliable, secure, and filled with top-tier talent. Highly recommend for any large-scale event.`,
        avatar: '/images/testimonial-2.webp',
    },
    {
        name: 'Sneha Kapoor',
        role: 'Wedding Coordinator',
        message: `I've used ${siteDetails.siteName} for multiple weddings, and it never disappoints. From sensational dancers to soulful singers, the artists bring every event to life.`,
        avatar: '/images/testimonial-3.webp',
    },
];