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
    default: 'bg-white shadow-modern hover:shadow-luxury-dark hover:scale-105 transition-all duration-300 border border-black/5',
    elevated: 'bg-white shadow-luxury-dark hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-black/8',
    accent: 'bg-gradient-to-br from-secondary/10 to-accent/10 border border-secondary/20 hover:border-accent/40 transition-all duration-300 shadow-modern',
    dark: 'bg-primary text-background-light hover:scale-105 transition-all duration-300 shadow-luxury-dark',
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