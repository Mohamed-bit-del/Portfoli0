import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import MainLayout from "../components/layout/MainLayout";
import PageMeta from "../components/ui/PageMeta";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import { getProjectBySlug } from "../utils/getProjectBySlug";
import { pageTransition } from "../animations/pageTransitions";
import NotFound from "./NotFound";

const MotionDiv = motion.div;

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <NotFound />;
  }

  return (
    <MainLayout>
      <PageMeta
        title={project.title}
        description={project.description}
        image={project.image}
        path={`/projects/${slug}`}
      />
      <MotionDiv {...pageTransition}>
        <Container className="py-20">
          <Link
            to="/#projects"
            className="mb-8 inline-block text-sm text-white/60 hover:text-white"
          >
            &larr; Back to projects
          </Link>
          <h1 className="font-heading text-4xl font-bold">{project.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/70">
            {project.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
          <div className="mt-8 flex gap-4">
            {project.demo && (
              <Button as="a" href={project.demo} target="_blank" rel="noopener noreferrer">
                Live Demo
              </Button>
            )}
            {project.github && (
              <Button
                as="a"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
              >
                GitHub
              </Button>
            )}
          </div>
        </Container>
      </MotionDiv>
    </MainLayout>
  );
}
