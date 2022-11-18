import React from 'react';
import './Card.scss';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = (props: CardProps) => {
  const { children, className = '' } = props;

  return <div className={`card ${className}`}>{children}</div>;
};

export default Card;
