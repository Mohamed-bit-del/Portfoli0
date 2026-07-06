import { motion } from "framer-motion";
import { skills } from "../../data/skills";

const MotionDiv = motion.div;
import Badge from "../../components/ui/Badge";
import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import { fadeInUp, staggerContainer } from "../../animations/scrollAnimations";

const categories = [
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "tools", label: "Tools" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <Container>
        <SectionTitle title="Skills" subtitle="Technologies I work with" />
        <MotionDiv
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid gap-8 md:grid-cols-3"
        >
          {categories.map(({ key, label }) => (
            <MotionDiv key={key} variants={fadeInUp}>
              <h3 className="mb-4 font-heading text-lg font-semibold text-white">
                {label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills[key].map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </MotionDiv>
          ))}
        </MotionDiv>
      </Container>
    </section>
  );
}
