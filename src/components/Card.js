import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  variant = 'default',
  animate = false,
  ...props 
}) => {
  const baseClasses = 'rounded-2xl transition-all duration-300';
  
  const variants = {
    default: 'bg-white shadow-heritage hover:shadow-heritage-lg',
    elevated: 'bg-white shadow-heritage-lg hover:shadow-2xl',
    accent: 'bg-gradient-to-br from-secondary/10 to-accent/10 border border-secondary/20',
    dark: 'bg-primary text-background-light',
  };
  
  const animationClasses = animate ? 'animate-fade-in hover:scale-105' : '';
  
  const classes = `${baseClasses} ${variants[variant]} ${animationClasses} ${className}`;
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card; 