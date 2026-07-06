import { Link } from "react-router-dom";
import Badge from "../../components/ui/Badge";
import Card from "../../components/ui/Card";

export default function ProjectCard({ project }) {
  return (
    <Card className="flex h-full flex-col">
      <h3 className="font-heading text-xl font-semibold">{project.title}</h3>
      <p className="mt-2 flex-1 text-sm text-white/60">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>
      <div className="mt-6 flex gap-4 text-sm">
        <Link
          to={`/projects/${project.slug}`}
          className="text-white/80 underline-offset-4 hover:text-white hover:underline"
        >
          Details
        </Link>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white"
          >
            Demo
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white"
          >
            GitHub
          </a>
        )}
      </div>
    </Card>
  );
}
