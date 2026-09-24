"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Props = {
  sources: string[];
  imageUrl: string | null;
};

// Tries each URL in order; moves to the next one if the image fails to load.
export default function BlogCardImage({ sources, imageUrl }: Props) {
  const [index, setIndex] = useState(0);
  const imgRef = useRef<HTMLImageElement>(null);
  const src = sources[index];

  // onError can be missed if the image fails before hydration,
  // so also check for an already-broken image after mount.
  useEffect(() => {
    const el = imgRef.current;
    if (el && el.complete && el.naturalWidth === 0) {
      setIndex((i) => i + 1);
    }
  }, [index]);

  if (!src) return null;

  return (
    <Image
      key={imageUrl || src}
      ref={imgRef}
      src={imageUrl || src}
      width={426}
      height={284}
      alt=""
      className="rounded-[24px] h-auto w-full temp-class"
      sizes="(max-width: 768px) 100vw, 426px"
      loading="eager" // makes the `complete` check above reliable
      onError={() => setIndex((i) => i + 1)}
    />
  );
}
