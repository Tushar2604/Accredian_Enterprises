export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
  highlight?: boolean;
}

export interface Step {
  id: string;
  number: string;
  title: string;
  description: string;
  detail: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
}

export interface Partner {
  id: string;
  name: string;
  category: "iit" | "iim" | "global" | "tech";
  abbr: string;
}

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface LeadFormData {
  fullName: string;
  workEmail: string;
  companyName: string;
  teamSize: string;
  message: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  id?: string;
}
