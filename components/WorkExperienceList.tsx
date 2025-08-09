import React from 'react';
import { WorkExperience } from '@/types';
import Card from './ui/Card';
import Badge from './ui/Badge';

interface WorkExperienceListProps {
  workExperiences: WorkExperience[];
}

export default function WorkExperienceList({ workExperiences }: WorkExperienceListProps) {
  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Present';
    return new Date(dateString).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long' 
    });
  };

  const parseResponsibilities = (responsibilities: string) => {
    return responsibilities.split('\n').filter(item => item.trim());
  };

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My professional journey and the impact I've made.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gray-200"></div>
            
            {workExperiences.map((experience, index) => (
              <div key={experience.id} className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                {/* Content */}
                <div className={`w-full md:w-5/12 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <Card>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        {experience.metadata.company_logo && (
                          <img 
                            src={`${experience.metadata.company_logo.imgix_url}?w=48&h=48&fit=crop&auto=format,compress`}
                            alt={experience.metadata.company}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                        )}
                        <div>
                          <h3 className="text-xl font-semibold">{experience.metadata.role}</h3>
                          <p className="text-purple-600 font-medium">{experience.metadata.company}</p>
                        </div>
                      </div>
                      {experience.metadata.current && (
                        <Badge variant="success">Current</Badge>
                      )}
                    </div>

                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {formatDate(experience.metadata.start_date)} - {formatDate(experience.metadata.end_date)}
                    </div>

                    {experience.metadata.location && (
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {experience.metadata.location}
                      </div>
                    )}

                    {experience.metadata.responsibilities && (
                      <div className="space-y-2">
                        <h4 className="font-medium text-gray-900">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {parseResponsibilities(experience.metadata.responsibilities).map((responsibility, idx) => (
                            <li key={idx} className="text-gray-600 text-sm flex items-start">
                              <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {responsibility.replace(/^[-•]\s*/, '')}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}