export type JobDetails = { [key: string]: JobDetail };

interface JobDetail {
  id: number;
  title: string;
  description: string;
  responsibilities: string[];
  minQualifications: string[];
  desiredSkills: string[];
  hours: string[];
  questions: string[];
}
