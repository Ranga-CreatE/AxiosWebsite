import React from 'react';
import Counter from './Counter';

export const StatCard = ({ label, sublabel }) => {
  return (
    <div className="stat-card-futuristic group">
      <div className="relative z-10">
        <div className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-2 group-hover:text-gold transition-colors">
          {label}
        </div>
        <div className="flex items-baseline space-x-2">
          <Counter target={100} duration={800} />
          <span className="text-gold text-2xl">+</span>
        </div>
        <div className="h-[1px] w-full bg-white/5 mt-4 group-hover:bg-gold/30 transition-all"></div>
        <p className="text-sm text-gray-400 mt-4 group-hover:text-gray-200">{sublabel}</p>
      </div>
    </div>
  );
};

export default StatCard;
