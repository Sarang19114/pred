'use client';

import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import { 
  Building2, 
  BrainCircuit, 
  Users, 
} from 'lucide-react';

type StatCardProps = {
  label: string;
  number: number;
  icon: React.ReactNode;
  suffix?: string;
  formatter?: (value: number) => string;
};

// Helper function to format large numbers with commas
const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const StatCard = ({ 
  label, 
  number, 
  icon, 
  suffix = '', 
  formatter = formatNumber 
}: StatCardProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { val } = useSpring({
    from: { val: 0 },
    to: { val: inView ? number : 0 },
    config: { tension: 70, friction: 15 },
    delay: 200,
  });

  return (
    <div 
      ref={ref} 
      className="relative -z-20 overflow-hidden group transition-all duration-300 h-44 flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-neutral-800 dark:to-neutral-900 shadow-lg hover:shadow-xl border border-gray-100 dark:border-neutral-700 hover:scale-105"
    >
      <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-blue-50 dark:bg-blue-900/20 opacity-70 group-hover:opacity-100 transition-opacity"></div>
      <div className="absolute -left-8 -bottom-8 w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-900/20 opacity-70 group-hover:opacity-100 transition-opacity"></div>
      
      <div className="text-blue-500 dark:text-blue-400 mb-3">{icon}</div>
      
      <div className="flex items-baseline gap-1 justify-center">
        <animated.div className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
          {val.to(n => formatter(Math.floor(n)))}
        </animated.div>
        {suffix && <span className="text-xl sm:text-2xl font-semibold text-blue-500 dark:text-blue-400">{suffix}</span>}
      </div>
      
      <div className="mt-2 text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">{label}</div>
    </div>
  );
};

export const StatsCounter = () => {
  return (
    <section className="w-full py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Our Impact by the Numbers</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Delivering exceptional results across industries with our innovative solutions</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <StatCard 
            label="AI Algorithms" 
            number={15} 
            suffix="+" 
            icon={<BrainCircuit size={32} className="stroke-current" />} 
          />
          <StatCard 
            label="Global Clients" 
            number={120} 
            suffix="+" 
            icon={<Users size={32} className="stroke-current" />} 
          />
          <StatCard 
            label="Companies Data" 
            number={45000}
            suffix="+"
            icon={<Building2 size={32} className="stroke-current" />} 
          />
        </div>
      </div>
    </section>
  );
};