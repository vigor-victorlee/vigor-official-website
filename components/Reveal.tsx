"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Reveal({
  children,
  stagger = 0.08,
  selector = ".reveal",
  start = "top 85%",
}: {
  children: React.ReactNode;
  stagger?: number;
  selector?: string;
  start?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const targets = root.querySelectorAll<HTMLElement>(selector);
    if (!targets.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger,
          scrollTrigger: {
            trigger: root,
            start,
            once: true,
          },
        }
      );
    }, root);

    return () => ctx.revert();
  }, [selector, stagger, start]);

  return <div ref={ref}>{children}</div>;
}
