"use client";

import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  animation?: string;
  delay?: string;
  duration?: string;
  once?: boolean;
}

export function AnimateOnScroll({
  children,
  className,
  animation = "animate-fade-in-up",
  delay = "delay-0",
  duration = "duration-500",
  once = true,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else {
          if (!once) {
            setIsVisible(false);
          }
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [once]);

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all transform-gpu ease-out',
        isVisible
          ? `opacity-100 translate-y-0 ${delay} ${duration}`
          : 'opacity-0 translate-y-4',
        className
      )}
    >
      {children}
    </div>
  );
}