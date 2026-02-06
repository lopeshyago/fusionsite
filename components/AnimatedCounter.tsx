
import React, { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const currentCount = Math.min(Math.floor((progress / duration) * end), end);
        setCount(currentCount);
        if (progress < duration) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [end, duration, isInView]);

  return <span ref={ref}>{count.toLocaleString('pt-BR')}</span>;
};

const useInView = (ref: React.RefObject<HTMLElement>) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isInView;
};

export default AnimatedCounter;
