import { motion } from "framer-motion";
import { testimonials } from "../../data/testimonials";

const MotionDiv = motion.div;
import Card from "../../components/ui/Card";
import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import { fadeInUp, staggerContainer } from "../../animations/scrollAnimations";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <Container>
        <SectionTitle title="Testimonials" subtitle="What people say" />
        <MotionDiv
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid gap-6 md:grid-cols-3"
        >
          {testimonials.map((item) => (
            <MotionDiv key={item.name} variants={fadeInUp}>
              <Card className="h-full">
                <p className="text-sm italic text-white/70">&ldquo;{item.quote}&rdquo;</p>
                <div className="mt-4 border-t border-white/10 pt-4">
                  <p className="font-medium text-white">{item.name}</p>
                  <p className="text-xs text-white/50">
                    {item.role}, {item.company}
                  </p>
                </div>
              </Card>
            </MotionDiv>
          ))}
        </MotionDiv>
      </Container>
    </section>
  );
}
