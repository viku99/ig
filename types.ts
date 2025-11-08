
export interface Project {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  heroMedia: {
    type: 'image' | 'video' | 'youtube';
    src: string;
  };
  client: string;
  year: number;
  tools: string[];
  description: string;
  gallery?: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
}

export interface Skill {
  name: string;
}

export interface AboutContent {
  bio: string;
  imageUrl: string;
}

export interface Content {
  about: AboutContent;
  skills: Skill[];
  testimonials: Testimonial[];
  projects: Project[];
}
