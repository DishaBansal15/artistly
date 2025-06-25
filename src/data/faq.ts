import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `How do I book an artist through ${siteDetails.siteName}?`,
    answer: `Booking is simple! Browse artist profiles, check availability, and send a booking request directly through the platform. Once confirmed, you’ll receive a detailed agreement and support throughout the process.`,
    },
    {
          question: `Can I book artists for events in different cities?`,
    answer: `Yes! ${siteDetails.siteName} features performers from across the country. You can filter by location, and many artists are open to traveling depending on the event.`,
  },
    {
        question: `Is payment handled securely on ${siteDetails.siteName}?`,
    answer: `Absolutely. We use encrypted payment gateways and offer escrow-based systems to ensure secure and transparent transactions between clients and artists.`,
   },
    {
      question: `Can I communicate with the artist before the event?`,
    answer: `Yes. Once your booking request is accepted, you'll be able to chat directly with the artist to finalize event details and ensure expectations are aligned.`,
  },
    {
         question: `What if an artist cancels last minute?`,
    answer: `${siteDetails.siteName} has a contingency policy. In rare cases of cancellation, we’ll assist you in finding a suitable replacement as quickly as possible or offer a refund, depending on the circumstances.`,

    }
];