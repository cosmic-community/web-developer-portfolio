import React from 'react';
import { Testimonial } from '@/types';
import Card from './ui/Card';
import Badge from './ui/Badge';

interface TestimonialListProps {
  testimonials: Testimonial[];
}

export default function TestimonialList({ testimonials }: TestimonialListProps) {
  // Filter out any invalid testimonials
  const validTestimonials = testimonials.filter(testimonial => 
    testimonial && 
    testimonial.metadata && 
    testimonial.metadata.name && 
    testimonial.metadata.quote && 
    typeof testimonial.metadata.name === 'string' &&
    typeof testimonial.metadata.quote === 'string'
  );

  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            What clients say about working with me.
          </p>
        </div>

        {validTestimonials.length === 0 ? (
          <div className="text-center text-gray-500">
            <p>Testimonials will be displayed here once content is available.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {validTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="relative">
                {/* Quote icon */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>

                {testimonial.metadata?.featured && (
                  <div className="absolute -top-2 -right-2">
                    <Badge variant="default">Featured</Badge>
                  </div>
                )}

                <div className="pt-4">
                  <blockquote className="text-gray-600 mb-6 italic leading-relaxed">
                    "{testimonial.metadata.quote}"
                  </blockquote>

                  <div className="flex items-center">
                    {testimonial.metadata?.headshot?.imgix_url && (
                      <img 
                        src={`${testimonial.metadata.headshot.imgix_url}?w=60&h=60&fit=crop&auto=format,compress`}
                        alt={testimonial.metadata.name || 'Profile photo'}
                        className="w-15 h-15 rounded-full mr-4 object-cover"
                      />
                    )}
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.metadata.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.metadata?.role && testimonial.metadata.role}
                        {testimonial.metadata?.company && testimonial.metadata?.role && (
                          <span> at {testimonial.metadata.company}</span>
                        )}
                        {testimonial.metadata?.company && !testimonial.metadata?.role && (
                          <span>{testimonial.metadata.company}</span>
                        )}
                      </div>
                    </div>
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