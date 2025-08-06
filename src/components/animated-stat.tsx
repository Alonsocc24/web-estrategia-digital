"use client";

import { useEffect, useRef, useState } from "react";

const useCountUp = (end: number, duration = 2000) => {
  const [count, setCount] = useState(0);
  const frameRate = 1000 / 60;
  const totalFrames = Math.round(duration / frameRate);

  useEffect(() => {
    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const progress = (frame / totalFrames) ** 2; // Ease-out
      const currentCount = Math.round(end * progress);

      if (frame >= totalFrames) {
        clearInterval(counter);
        setCount(end);
      } else {
        setCount(currentCount);
      }
    }, frameRate);

    return () => {
      clearInterval(counter);
    };
  }, [end, duration, totalFrames]);

  return count;
};


const useOnScreen = (options: IntersectionObserverInit) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return [ref, isVisible] as const;
};

interface AnimatedStatProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

export function AnimatedStat({ value, label, icon }: AnimatedStatProps) {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");
  const count = useCountUp(isVisible ? numericValue : 0, 2000);

  return (
    <div ref={ref} className="text-center">
      <div className="mb-2 flex items-center justify-center">{icon}</div>
      <p className="text-3xl font-bold text-primary">
        {count}
        {suffix}
      </p>
      <p className="text-sm text-foreground/60">{label}</p>
    </div>
  );
}
