import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div className={`bg-white rounded-xl border border-gray-200 p-6 ${hover ? 'card-hover' : ''} ${className}`}>
      {children}
    </div>
  );
}