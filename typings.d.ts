interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  address: string;
  backgroundInformation: string;
  title1: string;
  title2: string;
  title3: string;
  email: string;
  role: string;
  heroImage: Image;
  name: string;
  phoneNumber: string;
  profilePic: Image;
  order: string;
}

export interface Technology extends SanityBody {
  _type: "skill";
  image: Image;
  progress: number;
  title: string;
}

export interface Skill extends SanityBody {
  _type: "skill";
  image: Image;
  progress: number;
  title: string;
  order: string;
}

export interface Experience extends SanityBody {
  _type: "experience";
  company: string;
  companyImage: Image;
  dateStarted: date;
  dateEnded: date;
  isCurrentlyWorkingHere: boolean;
  isCertificate: boolean;
  certificateLink: string;
  jobTitle: string;
  points: string[];
  technologies: Technology[];
  order: string;
}

export interface Project extends SanityBody {
  title: string;
  _type: "project";
  image: Image;
  summary: string;
  linkToBuild: string;
  gitHubRepo: string;
  technologies: Technology[];
  order: string;
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
  order: string;
}
