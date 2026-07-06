import { motion } from "framer-motion";

const MotionP = motion.p;
import { siteConfig } from "../../config/siteConfig";
import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import { fadeInUp } from "../../animations/scrollAnimations";

export default function About() {
  return (
    <section id="about" className="py-20">
      <Container>
        <SectionTitle title="About" subtitle="Who I am" />
        <MotionP
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="max-w-2xl text-lg leading-relaxed text-white/70"
        >
          {siteConfig.bio}
        </MotionP>
      </Container>
    </section>
  );
}
