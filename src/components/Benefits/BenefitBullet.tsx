import { motion } from "framer-motion";
import { IBenefitBullet } from "@/types";
import { childVariants } from "./BenefitSection";

const BenefitBullet: React.FC<IBenefitBullet> = ({ title, description, icon }) => {
  return (
    <motion.div
      className="flex flex-row items-start gap-4 mt-6"
      variants={childVariants}
    >
      <div className="flex-shrink-0 text-indigo-600 mt-1">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
        <p className="text-base text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

export default BenefitBullet;
