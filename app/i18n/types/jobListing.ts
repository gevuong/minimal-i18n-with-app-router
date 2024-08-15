export interface JobListing {
  jobList: Job[];
  titleImage: string;
  title: string;
  text: string;
  modal: JobModal;
}

export interface Job {
  category: string;
  positions: JobPosition[];
}

export interface JobModal {
  text: string;
  yes: string;
  no: string;
}

interface JobPosition {
  title: string;
  id: number;
}
