import { Skill } from '@/types';

interface SkillListProps {
  skills: Skill[];
}

export default function SkillList({ skills }: SkillListProps) {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <li key={skill.id} className="flex items-center">
            {skill.metadata.icon && (
              <img src={skill.metadata.icon.imgixUrl} alt={skill.metadata.name} width={40} height={40} className="mr-3"/>
            )}
            <div>
              <h3 className="text-lg font-semibold">{skill.metadata.name}</h3>
              <p>{skill.metadata.proficiency?.value} - {skill.metadata.yearsExperience} years</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}