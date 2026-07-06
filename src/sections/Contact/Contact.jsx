import { motion } from "framer-motion";

const MotionDiv = motion.div;
import { socialLinks } from "../../data/socialLinks";
import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import { fadeInUp } from "../../animations/scrollAnimations";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <Container>
        <SectionTitle title="Contact" subtitle="Let's work together" />
        <MotionDiv
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-4"
        >
          {socialLinks.map((link) => (
            <Button
              key={link.id}
              as="a"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              {link.label}
            </Button>
          ))}
        </MotionDiv>
      </Container>
    </section>
  );
}
