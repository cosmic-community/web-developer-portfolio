import { WorkExperience } from '@/types';

interface WorkExperienceListProps {
  workExperiences: WorkExperience[];
}

export default function WorkExperienceList({ workExperiences }: WorkExperienceListProps) {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
      <ul className="space-y-4">
        {workExperiences.map((experience) => (
          <li key={experience.id} className="border-b border-gray-200 pb-4">
            <h3 className="text-2xl font-semibold">{experience.metadata.role} at {experience.metadata.company}</h3>
            <p>{experience.metadata.startDate} - {experience.metadata.endDate ? experience.metadata.endDate : 'Present'}</p>
            <p>{experience.metadata.location}</p>
            <p>{experience.metadata.responsibilities}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}