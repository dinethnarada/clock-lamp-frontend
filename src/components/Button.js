'use client';
import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  className = '', 
  onClick,
  ...props 
}) => {
  const baseClasses = 'font-bold rounded-lg transition-all duration-300 hover:transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-secondary text-text-dark hover:bg-primary hover:text-background-light focus:ring-secondary',
    accent: 'bg-accent text-text-dark hover:bg-primary hover:text-background-light focus:ring-accent',
    outline: 'border-2 border-secondary text-secondary hover:bg-secondary hover:text-text-dark focus:ring-secondary',
    dark: 'bg-primary text-background-light hover:bg-primary-dark focus:ring-primary',
  };
  
  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button; 