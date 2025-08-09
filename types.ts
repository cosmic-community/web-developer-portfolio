interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  createdAt: string;
  modifiedAt: string;
}

interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    name: string;
    role?: string;
    company?: string;
    quote: string;
    headshot?: {
      url: string;
      imgixUrl: string;
    };
    featured?: boolean;
  };
}

interface WorkExperience extends CosmicObject {
  type: 'work-experience';
  metadata: {
    company: string;
    role: string;
    startDate?: string;
    endDate?: string;
    current?: boolean;
    location?: string;
    responsibilities?: string;
    companyLogo?: {
      url: string;
      imgixUrl: string;
    };
  };
}

interface Skill extends CosmicObject {
  type: 'skills';
  metadata: {
    name: string;
    proficiency?: {
      key: string;
      value: string;
    };
    category?: {
      key: string;
      value: string;
    };
    yearsExperience?: number;
    icon?: {
      url: string;
      imgixUrl: string;
    };
  };
}

interface Project extends CosmicObject {
  type: 'projects';
  metadata: {
    title: string;
    shortDescription?: string;
    content?: string;
    projectType?: {
      key: string;
      value: string;
    };
    technologies?: Skill[];
    featuredImage?: {
      url: string;
      imgixUrl: string;
    };
    gallery?: {
      url: string;
      imgixUrl: string;
    }[];
    liveUrl?: string;
    repoUrl?: string;
    year?: string;
    featured?: boolean;
  };
}

type CosmicResponse<T> = {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
};

function isTestimonial(obj: CosmicObject): obj is Testimonial {
  return obj.type === 'testimonials';
}

function isWorkExperience(obj: CosmicObject): obj is WorkExperience {
  return obj.type === 'work-experience';
}

function isSkill(obj: CosmicObject): obj is Skill {
  return obj.type === 'skills';
}

function isProject(obj: CosmicObject): obj is Project {
  return obj.type === 'projects';
}