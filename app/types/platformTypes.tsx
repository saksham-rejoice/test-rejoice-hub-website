export interface PlatformProject {
  id: string;
  projectName: string;
  url: string;
  image: string;
  description: string;
}

export interface PlatformData {
  fintech: PlatformProject[];
  lms: PlatformProject[];
}