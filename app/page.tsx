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
  try {
    const [projects, skills, workExperiences, testimonials] = await Promise.all([
      getProjects(),
      getSkills(),
      getWorkExperience(),
      getTestimonials()
    ]);

    return (
      <>
        <Navigation />
        <main>
          <Hero />
          <About />
          <ProjectList projects={projects || []} />
          <SkillList skills={skills || []} />
          <WorkExperienceList workExperiences={workExperiences || []} />
          <TestimonialList testimonials={testimonials || []} />
          <Contact />
        </main>
        <Footer />
      </>
    );
  } catch (error) {
    console.error('Error loading homepage data:', error);
    return (
      <>
        <Navigation />
        <main>
          <Hero />
          <About />
          <ProjectList projects={[]} />
          <SkillList skills={[]} />
          <WorkExperienceList workExperiences={[]} />
          <TestimonialList testimonials={[]} />
          <Contact />
        </main>
        <Footer />
      </>
    );
  }
}