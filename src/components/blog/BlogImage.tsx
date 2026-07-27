"use client";

import { useState } from "react";
import Image from "next/image";

const PLACEHOLDER_STYLE = {
  background: "linear-gradient(80.47deg, #38BDF8 -14.05%, #3B82F6 55.68%, #38BDF8 81.9%)",
};

export function BlogImage({
  src,
  alt,
  unoptimized,
  sizes,
  className,
  priority,
}: {
  src: string;
  alt: string;
  unoptimized: boolean;
  sizes: string;
  className?: string;
  priority?: boolean;
}) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return <div className="w-full h-full" style={PLACEHOLDER_STYLE} />;
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      unoptimized={unoptimized}
      sizes={sizes}
      className={className}
      onError={() => setErrored(true)}
    />
  );
}
