import React from 'react';
import Image from 'next/image';

import AppStoreButton from './AppStoreButton';
import PlayStoreButton from './PlayStoreButton';

import { heroDetails } from '@/data/hero';

const Hero: React.FC = () => {
    return (
        <section
            id="hero"
            className="relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5 bg-gradient-to-b from-indigo-50 to-white"
        >
            {/* Grid Background */}
            <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
                <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]">
                </div>
            </div>

            {/* Bottom Blur Gradient */}
            <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-40 bg-gradient-to-b from-transparent via-[rgba(233,238,255,0.5)] to-[rgba(202,208,230,0.5)]">
            </div>

            <div className="text-center">
                <h1 className="text-4xl md:text-6xl md:leading-tight font-extrabold text-indigo-700 max-w-lg md:max-w-3xl mx-auto">
                    Discover & Book Top Artists Instantly
                </h1>
                <p className="mt-4 text-gray-700 max-w-lg mx-auto">
                    From singers and DJs to speakers and dancers — Artistly connects you with the perfect performer for any event.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row items-center sm:gap-4 w-fit mx-auto">
                    <AppStoreButton dark />
                    <PlayStoreButton dark />
                </div>
                <Image
  src={heroDetails.centerImageSrc}
  width={384}
  height={340}
  quality={100}
  sizes="(max-width: 768px) 100vw, 384px"
  priority={true}
  unoptimized={true}
  alt="app mockup"
  className="relative mt-12 md:mt-16 mx-auto z-10 transition-transform duration-500 hover:scale-105 hover:-translate-y-1"
/>


            </div>
        </section>
    );
};

export default Hero;
