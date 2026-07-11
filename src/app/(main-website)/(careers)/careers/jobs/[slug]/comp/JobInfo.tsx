import { Raleway } from "next/font/google";

type Props = {
  content: string;
  jobCategory: string;
  jobType: string;
  jobExperience: string;
  jobLocation: string;
};

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-raleway",
  display: "swap",
});

const JobInfo = ({
  content,
  jobCategory,
  jobType,
  jobExperience,
  jobLocation,
}: Props) => {
  return (
    <div className={`${raleway.variable} break-all`}>
      <div className="leading-[30px] text-lg mb-5">
        <p>
          <strong>Job Category: </strong>
          {jobCategory}
        </p>
        <p>
          <strong>Job Type: </strong>
          {jobType}
        </p>
        <p>
          <strong>Required Experience: </strong>
          {jobExperience}
        </p>
        <p>
          <strong>Job Location: </strong>
          {jobLocation}
        </p>
      </div>
      <div className="singleJobsInfo">
        <div
          className="job-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
};

export default JobInfo;
