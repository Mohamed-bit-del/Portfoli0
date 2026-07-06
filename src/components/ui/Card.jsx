import { motion } from "framer-motion";
import { cardHover } from "../../animations/hoverAnimations";

const MotionDiv = motion.div;

export default function Card({ children, className = "", ...props }) {
  return (
    <MotionDiv
      initial="rest"
      whileHover="hover"
      variants={cardHover}
      className={`rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm ${className}`}
      {...props}
    >
      {children}
    </MotionDiv>
  );
}
