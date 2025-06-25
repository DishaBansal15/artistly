"use client"

import Image from "next/image";
import clsx from "clsx";
import { motion, Variants } from "framer-motion";

import BenefitBullet from "./BenefitBullet";
import SectionTitle from "../SectionTitle";
import { IBenefit } from "@/types";

interface Props {
    benefit: IBenefit;
    imageAtRight?: boolean;
}

const containerVariants: Variants = {
    offscreen: {
        opacity: 0,
        y: 100,
    },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 0.9,
            delayChildren: 0.2,
            staggerChildren: 0.1,
        },
    },
};

export const childVariants = {
    offscreen: {
        opacity: 0,
        x: -50,
    },
    onscreen: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 1,
        },
    },
};

const BenefitSection: React.FC<Props> = ({ benefit, imageAtRight }: Props) => {
    const { title, description, imageSrc, bullets } = benefit;

    return (
        <section className="py-24 px-5 bg-white">
            <motion.div
                className={clsx(
                    "flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-24",
                    { "lg:flex-row-reverse": imageAtRight }
                )}
                variants={containerVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
            >
                <motion.div className="flex-1 max-w-xl" variants={childVariants}>
                    <SectionTitle>
                        <h3 className="text-3xl font-semibold text-gray-800 leading-tight mb-4">
                            {title}
                        </h3>
                    </SectionTitle>
                    <p className="text-gray-600 text-base leading-relaxed mb-6">
                        {description}
                    </p>
                    <div className="space-y-4">
                        {bullets.map((item, index) => (
                            <BenefitBullet
                                key={index}
                                title={item.title}
                                icon={item.icon}
                                description={item.description}
                            />
                        ))}
                    </div>
                </motion.div>

                <div className="flex-1 flex justify-center">
                    <Image
                        src={imageSrc}
                        alt={title}
                        width={480}
                        height={480}
                        quality={100}
                        className="rounded-xl shadow-lg  transition-transform duration-500 hover:scale-105 hover:-translate-y-1"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default BenefitSection;
