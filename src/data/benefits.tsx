import { FiUsers, FiCalendar, FiMic, FiMusic, FiShield, FiUserCheck, FiStar, FiTrendingUp, FiSmartphone } from "react-icons/fi";
import { IBenefit } from "@/types";

export const benefits: IBenefit[] = [
  {
    title: "Book Top Talent Easily",
    description: "From sensational dancers to captivating speakers, find and book the perfect performer for your event – all in one place.",
    bullets: [
      {
        title: "Diverse Talent Pool",
        description: "Browse verified profiles of dancers, singers, DJs, and speakers.",
        icon: <FiUsers size={26} />
      },
      {
        title: "Real-Time Availability",
        description: "Check when your favorite artist is available and book instantly.",
        icon: <FiCalendar size={26} />
      },
      {
        title: "Instant Booking",
        description: "Skip the back-and-forth – book your artist in just a few clicks.",
        icon: <FiSmartphone size={26} />
      }
    ],
    imageSrc: "/images/booking.png"
  },
  {
    title: "Curated Experiences",
    description: "We don’t just connect you with talent — we help you curate unforgettable performances tailored to your event vibe.",
    bullets: [
      {
        title: "Personalized Recommendations",
        description: "Tell us your vibe – we’ll suggest artists who match your vision.",
        icon: <FiStar size={26} />
      },
      {
        title: "Artist Highlights & Reviews",
        description: "Make informed choices with ratings, reviews, and past performance clips.",
        icon: <FiTrendingUp size={26} />
      },
      {
        title: "Custom Event Packages",
        description: "Bundle performances, lighting, and music into one seamless experience.",
        icon: <FiMusic size={26} />
      }
    ],
    imageSrc: "/images/personalized.png"
  },
  {
    title: "Trust & Security",
    description: "We prioritize safe transactions, verified artists, and transparent communication.",
    bullets: [
      {
        title: "Verified Artists",
        description: "Each performer is vetted to ensure professional standards.",
        icon: <FiUserCheck size={26} />
      },
      {
        title: "Secure Payments",
        description: "Your money is safe with escrow-powered, milestone-based payments.",
        icon: <FiShield size={26} />
      },
      {
        title: "Dedicated Support",
        description: "Our team is ready to help – from inquiry to encore.",
        icon: <FiMic size={26} />
      }
    ],
    imageSrc: "/images/security.png"
  }
];
