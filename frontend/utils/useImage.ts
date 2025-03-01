"use client";

import { useEffect, useRef, useState } from "react";

export default function useImage() {
  const [imageProps, setImageProps] = useState<{
    height: number;
    width: number;
  }>({ height: 0, width: 0 });

  const parentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function setDimensions() {
      if (parentRef.current) {
        const { height, width } = parentRef.current.getBoundingClientRect();
        setImageProps({ height, width });
      }
    }
    window.addEventListener("resize", setDimensions);
    setDimensions();
    return () => window.removeEventListener("resize", setDimensions);
  }, [parentRef.current]);

  return { imageProps, parentRef };
}
