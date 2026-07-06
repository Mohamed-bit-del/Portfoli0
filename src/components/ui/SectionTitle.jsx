import { motion } from "framer-motion";
import { fadeInUp } from "../../animations/scrollAnimations";

const MotionDiv = motion.div;

export default function SectionTitle({ title, subtitle }) {
  return (
    <MotionDiv
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeInUp}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-white/60">{subtitle}</p>
      )}
    </MotionDiv>
  );
}
