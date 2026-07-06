import { motion } from "framer-motion";
import { services } from "../../data/services";

const MotionDiv = motion.div;
import Card from "../../components/ui/Card";
import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import { fadeInUp, staggerContainer } from "../../animations/scrollAnimations";

export default function Services() {
  return (
    <section id="services" className="py-20">
      <Container>
        <SectionTitle title="Services" subtitle="How I can help" />
        <MotionDiv
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid gap-6 md:grid-cols-2"
        >
          {services.map((service) => (
            <MotionDiv key={service.title} variants={fadeInUp}>
              <Card>
                <h3 className="font-heading text-lg font-semibold">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-white/60">
                  {service.description}
                </p>
              </Card>
            </MotionDiv>
          ))}
        </MotionDiv>
      </Container>
    </section>
  );
}
