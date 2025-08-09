// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
  status: string;
  thumbnail?: string;
  published_at?: string;
  bucket: string;
  created_by?: string;
  modified_by?: string;
}

// File/Image interface for Cosmic media fields
export interface CosmicFile {
  url: string;
  imgix_url: string;
}

// Select dropdown option interface
export interface CosmicSelectOption {
  key: string;
  value: string;
}

// Testimonial type based on Cosmic data structure
export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    name: string;
    role?: string;
    company?: string;
    quote: string;
    headshot?: CosmicFile;
    featured?: boolean;
  };
}

// Work Experience type based on Cosmic data structure
export interface WorkExperience extends CosmicObject {
  type: 'work-experience';
  metadata: {
    company: string;
    role: string;
    start_date?: string;
    end_date?: string | null;
    current?: boolean;
    location?: string;
    responsibilities?: string;
    company_logo?: CosmicFile;
  };
}

// Skill type based on Cosmic data structure
export interface Skill extends CosmicObject {
  type: 'skills';
  metadata: {
    name: string;
    proficiency?: CosmicSelectOption;
    category?: CosmicSelectOption;
    years_experience?: number;
    icon?: CosmicFile;
  };
}

// Project type based on Cosmic data structure
export interface Project extends CosmicObject {
  type: 'projects';
  metadata: {
    title: string;
    short_description?: string;
    content?: string;
    project_type?: CosmicSelectOption;
    technologies?: Skill[];
    featured_image?: CosmicFile;
    gallery?: CosmicFile[] | null;
    live_url?: string | null;
    repo_url?: string | null;
    year?: string;
    featured?: boolean;
  };
}

// Generic Cosmic API response type
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}

// Type guards for runtime type checking
export function isTestimonial(obj: CosmicObject): obj is Testimonial {
  return obj.type === 'testimonials';
}

export function isWorkExperience(obj: CosmicObject): obj is WorkExperience {
  return obj.type === 'work-experience';
}

export function isSkill(obj: CosmicObject): obj is Skill {
  return obj.type === 'skills';
}

export function isProject(obj: CosmicObject): obj is Project {
  return obj.type === 'projects';
}

// Union type for all content types
export type ContentObject = Testimonial | WorkExperience | Skill | Project;