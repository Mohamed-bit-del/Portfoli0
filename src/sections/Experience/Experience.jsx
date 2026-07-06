import { motion } from "framer-motion";
import { experience } from "../../data/experience";

const MotionDiv = motion.div;
import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import { fadeInUp, staggerContainer } from "../../animations/scrollAnimations";

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <Container>
        <SectionTitle title="Experience" subtitle="My professional journey" />
        <MotionDiv
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="relative border-l border-white/10"
        >
          {experience.map((job) => (
            <MotionDiv
              key={`${job.company}-${job.period}`}
              variants={fadeInUp}
              className="relative pb-8 pl-8 last:pb-0"
            >
              <div className="absolute -left-1.5 top-2 h-3 w-3 rounded-full bg-white" />
              <p className="text-sm text-white/50">{job.period}</p>
              <h3 className="mt-1 font-heading text-xl font-semibold">
                {job.role}
              </h3>
              <p className="text-white/70">
                {job.company} &middot; {job.location}
              </p>
              <p className="mt-2 text-white/60">{job.description}</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-white/60">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </MotionDiv>
          ))}
        </MotionDiv>
      </Container>
    </section>
  );
}
