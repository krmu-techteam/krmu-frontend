"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Props = {
  sources: string[];
};

// Tries each URL in order; moves to the next one if the image fails to load.
export default function BlogCardImage({ sources }: Props) {
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
      key={src}
      ref={imgRef}
      src={src}
      width={426}
      height={284}
      alt=""
      className="rounded-[24px] h-auto w-full"
      sizes="(max-width: 768px) 100vw, 426px"
      // Load straight from WordPress: Netlify's image optimizer was timing out (504)
      // while downloading originals from the slow WP server.
      unoptimized
      loading="eager" // makes the `complete` check above reliable
      onError={() => setIndex((i) => i + 1)}
    />
  );
}
