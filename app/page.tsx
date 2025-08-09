import { getProjects, getSkills, getWorkExperience, getTestimonials } from '@/lib/cosmic';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ProjectList from '@/components/ProjectList';
import SkillList from '@/components/SkillList';
import WorkExperienceList from '@/components/WorkExperienceList';
import TestimonialList from '@/components/TestimonialList';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default async function HomePage() {
  const projects = await getProjects();
  const skills = await getSkills();
  const workExperiences = await getWorkExperience();
  const testimonials = await getTestimonials();

  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <ProjectList projects={projects} />
        <SkillList skills={skills} />
        <WorkExperienceList workExperiences={workExperiences} />
        <TestimonialList testimonials={testimonials} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}