import { Testimonial } from '@/types';

interface TestimonialListProps {
  testimonials: Testimonial[];
}

export default function TestimonialList({ testimonials }: TestimonialListProps) {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
      <ul className="space-y-4">
        {testimonials.map((testimonial) => (
          <li key={testimonial.id} className="border-b border-gray-200 pb-4">
            <blockquote>"{testimonial.metadata.quote}"</blockquote>
            <p>- {testimonial.metadata.name}, {testimonial.metadata.role} at {testimonial.metadata.company}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}