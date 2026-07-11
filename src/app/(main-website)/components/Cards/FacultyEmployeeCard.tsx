"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { getWordImageById } from "@/lib/api/common";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {
  name: string;
  imgId: number;
  qual: string;
  desg?: string;
  slug: string;
};

export const FacultyEmployeeCard = ({
  name,
  imgId,
  qual,
  desg,
  slug,
}: Props) => {
  const [imgURL, setImgUrl] = useState("");

  useEffect(() => {
    async function fetchImgUrl() {
      const url = await getWordImageById(imgId).then((url) => url);
      setImgUrl(url);
    }

    if (imgId) {
      fetchImgUrl();
    }
  }, [imgId]);

  return (
    <>
      <div>
        <Link
          href={`/faculty/${slug}`}
          className="hover:text-[#0060aa] cursor-pointer flex flex-col gap-1.5 text-base"
          target="_blank" rel="noopener noreferrer"
        >
          <div className="mb-4">
            {imgURL ? (
              <Image
                src={`${imgURL}`}
                width={272}
                height={295}
                alt={name}
                style={{
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                }}
                className="rounded-[15px]"
              />
            ) : (
              <Skeleton className="w-[272px] h-[295px]" />
            )}
          </div>

          <span className=" md:text-2xl font-bold leading-[1]">{name}</span>
          <span className="font-normal md:font-medium break-all">{desg}</span>
          <span className="md:text-xl font-semibold">{qual}</span>
        </Link>
      </div>
    </>
  );
};
