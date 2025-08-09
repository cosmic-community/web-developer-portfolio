import React from 'react';
import { Project } from '@/types';
import Card from './ui/Card';
import Badge from './ui/Badge';
import Button from './ui/Button';

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  // Filter out any invalid projects
  const validProjects = projects.filter(project => 
    project && 
    project.metadata && 
    project.metadata.title && 
    typeof project.metadata.title === 'string'
  );

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of my recent work showcasing various technologies and creative solutions.
          </p>
        </div>

        {validProjects.length === 0 ? (
          <div className="text-center text-gray-500">
            <p>Projects will be displayed here once content is available.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {validProjects.map((project) => (
              <Card key={project.id} className="group overflow-hidden">
                {project.metadata?.featured_image?.imgix_url && (
                  <div className="aspect-video overflow-hidden rounded-lg mb-6 -mx-6 -mt-6">
                    <img 
                      src={`${project.metadata.featured_image.imgix_url}?w=400&h=250&fit=crop&auto=format,compress`}
                      alt={project.metadata.title || 'Project image'}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold group-hover:text-purple-600 transition-colors">
                      {project.metadata.title}
                    </h3>
                    {project.metadata?.featured && (
                      <Badge variant="default">Featured</Badge>
                    )}
                  </div>

                  {project.metadata?.project_type?.value && (
                    <Badge variant="secondary" className="text-xs">
                      {project.metadata.project_type.value}
                    </Badge>
                  )}

                  {project.metadata?.short_description && (
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {project.metadata.short_description}
                    </p>
                  )}

                  {project.metadata?.technologies && Array.isArray(project.metadata.technologies) && project.metadata.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.metadata.technologies.slice(0, 3).map((tech) => (
                        tech && tech.metadata?.name && (
                          <span 
                            key={tech.id}
                            className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-md font-mono"
                          >
                            {tech.metadata.name}
                          </span>
                        )
                      ))}
                      {project.metadata.technologies.length > 3 && (
                        <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-md">
                          +{project.metadata.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-2 pt-4">
                    {project.metadata?.live_url && (
                      <Button variant="primary" size="sm" className="flex-1">
                        <a 
                          href={project.metadata.live_url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          View Live
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </Button>
                    )}
                    {project.metadata?.repo_url && (
                      <Button variant="outline" size="sm" className="flex-1">
                        <a 
                          href={project.metadata.repo_url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          Code
                          <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}