'use client';

import React, { useEffect, useRef, useState } from 'react';

interface MetricProps {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
}

function MetricItem({ value, label, prefix = '', suffix = '' }: MetricProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), numericValue);
      setDisplayValue(current);

      if (step >= steps) {
        clearInterval(timer);
        setDisplayValue(numericValue);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, numericValue]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl md:text-5xl font-bold bg-gradient-to-b from-[#df3124] to-[#921ea2] bg-clip-text text-transparent mb-2">
        {prefix}{displayValue.toLocaleString()}{suffix}
      </p>
      <p className="text-sm text-white/60 font-medium">{label}</p>
    </div>
  );
}

interface MetricsDisplayProps {
  metrics: MetricProps[];
}

export function MetricsDisplay({ metrics }: MetricsDisplayProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {metrics.map((metric, index) => (
        <MetricItem key={index} {...metric} />
      ))}
    </div>
  );
}
