import MainLayout from "../components/layout/MainLayout";
import PageMeta from "../components/ui/PageMeta";
import Hero from "../sections/Hero/Hero";
import About from "../sections/About/About";
import Skills from "../sections/Skills/Skills";
import Experience from "../sections/Experience/Experience";
import FeaturedProjects from "../sections/FeaturedProjects/FeaturedProjects";
import Services from "../sections/Services/Services";
import Testimonials from "../sections/Testimonials/Testimonials";
import Contact from "../sections/Contact/Contact";

export default function Home() {
  return (
    <MainLayout>
      <PageMeta />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <FeaturedProjects />
      <Services />
      <Testimonials />
      <Contact />
    </MainLayout>
  );
}
