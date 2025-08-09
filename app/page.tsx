import { getProjects, getSkills, getWorkExperience, getTestimonials } from '@/lib/cosmic';
import ProjectList from '@/components/ProjectList';
import SkillList from '@/components/SkillList';
import WorkExperienceList from '@/components/WorkExperienceList';
import TestimonialList from '@/components/TestimonialList';

export default async function HomePage() {
  const projects = await getProjects();
  const skills = await getSkills();
  const workExperiences = await getWorkExperience();
  const testimonials = await getTestimonials();

  return (
    <main className="container mx-auto p-4 space-y-8">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold">Web Developer Portfolio</h1>
        <p>Discover my projects, skills, professional journey, and client experiences.</p>
      </header>

      <ProjectList projects={projects} />
      <SkillList skills={skills} />
      <WorkExperienceList workExperiences={workExperiences} />
      <TestimonialList testimonials={testimonials} />
    </main>
  );
}