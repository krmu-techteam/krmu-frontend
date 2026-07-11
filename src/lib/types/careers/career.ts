export type CareerResponse = CareerJobs[];

export type CareerJobs = {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
};

export type SingleJobResponse = SingleJob[];

export type SingleJob = {
  id: number;
  date: string;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  class_list: string[];
};
