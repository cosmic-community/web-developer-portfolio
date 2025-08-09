import React from 'react';
import { Skill } from '@/types';
import Card from './ui/Card';
import Badge from './ui/Badge';

interface SkillListProps {
  skills: Skill[];
}

export default function SkillList({ skills }: SkillListProps) {
  const categories = ['Frontend', 'Backend', 'DevOps', 'Tooling', 'Other'];
  
  const groupedSkills = categories.reduce((acc, category) => {
    acc[category] = skills.filter(skill => 
      skill.metadata.category?.value === category
    );
    return acc;
  }, {} as Record<string, Skill[]>);

  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency.toLowerCase()) {
      case 'expert': return 'bg-green-500';
      case 'advanced': return 'bg-blue-500';
      case 'intermediate': return 'bg-yellow-500';
      case 'beginner': return 'bg-gray-500';
      default: return 'bg-gray-400';
    }
  };

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            categorySkills.length > 0 && (
              <Card key={category}>
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
                  {category}
                </h3>
                <div className="space-y-4">
                  {categorySkills.map((skill) => (
                    <div key={skill.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {skill.metadata.icon && (
                          <img 
                            src={`${skill.metadata.icon.imgix_url}?w=32&h=32&fit=crop&auto=format,compress`}
                            alt={skill.metadata.name}
                            className="w-8 h-8 rounded-md"
                          />
                        )}
                        <div>
                          <div className="font-medium">{skill.metadata.name}</div>
                          {skill.metadata.years_experience && (
                            <div className="text-sm text-gray-500">
                              {skill.metadata.years_experience} years
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {skill.metadata.proficiency && (
                        <div className="flex items-center space-x-2">
                          <div className={`w-2 h-2 rounded-full ${getProficiencyColor(skill.metadata.proficiency.value)}`}></div>
                          <Badge variant="secondary" className="text-xs">
                            {skill.metadata.proficiency.value}
                          </Badge>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </Card>
            )
          ))}
        </div>
      </div>
    </section>
  );
}