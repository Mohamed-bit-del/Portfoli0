import { motion } from "framer-motion";
import { projects } from "../../data/projects";

const MotionDiv = motion.div;
import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import ProjectCard from "./ProjectCard";
import { fadeInUp, staggerContainer } from "../../animations/scrollAnimations";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-20">
      <Container>
        <SectionTitle title="Featured Projects" subtitle="Selected work" />
        <MotionDiv
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid gap-6 md:grid-cols-2"
        >
          {featured.map((project) => (
            <MotionDiv key={project.id} variants={fadeInUp}>
              <ProjectCard project={project} />
            </MotionDiv>
          ))}
        </MotionDiv>
      </Container>
    </section>
  );
}
