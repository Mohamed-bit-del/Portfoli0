import { motion } from "framer-motion";

const MotionDiv = motion.div;
import { siteConfig } from "../../config/siteConfig";
import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import { fadeInUp } from "../../animations/scrollAnimations";

export default function Hero() {
  return (
    <section id="hero" className="py-24 md:py-32">
      <Container>
        <MotionDiv
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-white/50">
            {siteConfig.title}
          </p>
          <h1 className="font-heading text-5xl font-bold leading-tight md:text-6xl">
            {siteConfig.name}
          </h1>
          <p className="mt-6 text-lg text-white/70">{siteConfig.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button as="a" href="#projects">
              View Projects
            </Button>
            <Button as="a" href="#contact" variant="secondary">
              Get in Touch
            </Button>
          </div>
        </MotionDiv>
      </Container>
    </section>
  );
}
