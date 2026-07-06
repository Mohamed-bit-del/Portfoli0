import { Link } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import PageMeta from "../components/ui/PageMeta";
import Button from "../components/ui/Button";
import Container from "../components/ui/Container";

export default function NotFound() {
  return (
    <MainLayout>
      <PageMeta title="Page Not Found" />
      <Container className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <h1 className="font-heading text-6xl font-bold">404</h1>
        <p className="mt-4 text-white/60">The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link to="/" className="mt-8">
          <Button>Back to Home</Button>
        </Link>
      </Container>
    </MainLayout>
  );
}
