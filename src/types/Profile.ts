export interface Profile {
  public_identifier: string;
  profile_pic_url: string;
  background_cover_image_url: string;
  first_name: string;
  last_name: string;
  full_name: string;
  nationality: string;
  email: string;
  job_start_date: BirthDate;
  occupation: string;
  headline: string;
  summary: string;
  country: string;
  country_full_name: string;
  city: string;
  state: string;
  experiences: Experience[];
  education: Education[];
  languages: string[];
  accomplishment_courses: AccomplishmentCourse[];
  accomplishment_projects: AccomplishmentProject[];
  skills: string[];
  gender: string;
  birth_date: BirthDate;
  extra: Extra;
}

export interface AccomplishmentCourse {
  name: string;
  number: string;
}

export interface AccomplishmentProject {
  starts_at: BirthDate;
  ends_at: BirthDate;
  title: string;
  description: string;
  url: null;
}

export interface BirthDate {
  day: number;
  month: number;
  year: number;
}

export interface Education {
  starts_at: BirthDate;
  ends_at: BirthDate;
  field_of_study: string;
  degree_name: string;
  school: string;
  school_linkedin_profile_url: null;
  description: null;
  logo_url: null | string;
  grade: null;
  activities_and_societies: null;
}

export interface Experience {
  starts_at: BirthDate;
  ends_at: BirthDate | null;
  company: string;
  company_linkedin_profile_url: string;
  title: string;
  description: null | string;
  skills: string[];
  location: string;
  logo_url: string;
}

export interface Extra {
  github_profile_id: string;
  twitter_profile_id: string;
  linkedin_profile_id: string;
}
