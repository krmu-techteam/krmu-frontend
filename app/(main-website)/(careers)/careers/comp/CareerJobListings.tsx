"use client";

import { useEffect, useRef, useState } from "react";
import { MoveRight } from "lucide-react";
import CareerJob from "./CareerJob";
import { KRMUWordUrl } from "@/app/constant";

const CareerJobListings = () => {
  const [search, setSearch] = useState("");
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  const abortRef = useRef<AbortController | null>(null);

  // Optimized Fe tch Function
  const fetchJobs = async (text: string) => {
    // Cancel previous request
    if (abortRef.current) {
      abortRef.current.abort();
    }

    const controller = new AbortController();
    abortRef.current = controller;
    const url = `${KRMUWordUrl}/careers2/wp-json/wp/v2/awsm_job_openings?page=1&per_page=60&_fields=id,slug,title.rendered&search=${encodeURIComponent(
      text
    )}&search_columns[]=post_title`;

    // const url = `${KRMUWordUrl}/careers2/wp-json/wp/v2/awsm_job_openings?page=1&per_page=60&_fields=id,slug,title.rendered${
    //   text ? `&search=${text}` : ""
    // }`;

    try {
      setLoading(true);
      const res = await fetch(url, { signal: controller.signal });
      const data = await res.json();
      setJobs(data);
    } catch (err) {
      if (err instanceof DOMException && err.name === "AbortError") {
        return; // ignore abort errors
      }
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // 🔥 Super-optimized Debounce (250ms)
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchJobs(search);
    }, 250);

    return () => clearTimeout(timer);
  }, [search]);

  // Load all jobs initially
  useEffect(() => {
    fetchJobs("");
  }, []);

  return (
    <section className="py-10 px-4">
      <div className="max-w-[1200px] mx-auto w-full">
        {/* SEARCH UI */}
        <div className="max-w-[450px] mx-auto w-full py-10">
          <div className="flex">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-[#0516301f] rounded-full w-full -mr-12 pl-4 pr-10"
              placeholder="Search Faster..."
            />
            <button className="bg-red-600 py-4 px-8 rounded-full">
              <MoveRight color="white" />
            </button>
          </div>
        </div>

        {/* RESULTS */}
        <div className="flex flex-col gap-[15px]">
          {loading && <p>Loading...</p>}

          {!loading &&
            jobs?.map((job: any) => (
              <CareerJob
                key={job.id}
                title={job.title.rendered}
                slug={job.slug}
              />
            ))}

          {!loading && jobs?.length === 0 && <p>No job found.</p>}
        </div>
      </div>
    </section>
  );
};

export default CareerJobListings;
