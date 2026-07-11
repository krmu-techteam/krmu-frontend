import { getSingleJobBySlug } from "@/lib/api/careers/career";
import JobInfo from "./comp/JobInfo";
import { notFound } from "next/navigation";
import JobForm from "./comp/JobForm";

type Props = {
  params: Promise<{ slug: string }>;
};

import { Metadata } from "next";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const singleJobData = await getSingleJobBySlug(slug);

  const currentSingleJob = singleJobData?.find((job) => job?.slug === slug);

  const siteTitle = currentSingleJob?.title?.rendered;

  return {
    title: siteTitle || "K.R. Mangalam University",
  };
}

const page = async ({ params }: Props) => {
  const { slug } = await params;

  const singleJobData = await getSingleJobBySlug(slug);

  const currentSingleJob = singleJobData?.find((job) => job?.slug === slug);

  if (!currentSingleJob) {
    return notFound();
  }

  const classListsData = currentSingleJob?.class_list;
  const jobId = currentSingleJob?.id;
  const jobExperience = classListsData
    .find((x) => x.startsWith("job-experience-"))
    ?.replace("job-experience-", "") // 0-5-years
    ?.replace("-years", " years"); // 0-5 years

  const jobLocation = classListsData
    .find((x) => x.startsWith("job-location-"))
    ?.replace("job-location-", "") // gurugram
    ?.replace(/\b\w/g, (c) => c.toUpperCase()); // Gurugram

  const jobCategory = classListsData
    .find((x) => x.startsWith("job-category-"))
    ?.replace("job-category-", "") // faculty
    ?.replace(/\b\w/g, (c) => c.toUpperCase()); // Faculty

  const jobType = classListsData
    .find((x) => x.startsWith("job-type-"))
    ?.replace("job-type-", "") // full-time
    ?.replace(/-/g, " ") // full time
    ?.replace(/\b\w/g, (c) => c.toUpperCase()); // Full Time

  return (
    <section className="py-[140px] px-4">
      <div
        className={`${
          jobId === 53831 ? "max-w-[800px]" : "max-w-[1600px]"
        } mx-auto w-full flex flex-col lg:flex-row gap-[30px]`}
      >
        {jobId !== 53831 && currentSingleJob && (
          <div className="lg:w-1/2">
            <JobInfo
              jobCategory={jobCategory ?? ""}
              jobType={jobType ?? ""}
              jobExperience={jobExperience ?? ""}
              jobLocation={jobLocation ?? ""}
              content={currentSingleJob?.content?.rendered}
            />
          </div>
        )}

        <div className={jobId === 53831 ? "w-full" : "lg:w-1/2"}>
          <JobForm jobId={jobId} />
        </div>
      </div>
      {/* <div className="max-w-[1600px] mx-auto w-full flex flex-col lg:flex-row gap-[30px]">
        
          {
            jobId === '53831' ? '' : 
          currentSingleJob && (
            <div className="lg:w-1/2">
            <JobInfo
             
              jobCategory={jobCategory ?? ""}
              jobType={jobType ?? ""}
              jobExperience={jobExperience ?? ""}
              jobLocation={jobLocation ?? ""}
              content={currentSingleJob?.content?.rendered}
            />
          )}
        </div>
        <div className="lg:w-1/2">
          <JobForm jobId={jobId} />
        </div>
      </div> */}
    </section>
  );
};

export default page;
