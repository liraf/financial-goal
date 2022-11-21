import React from 'react';
import styles from './Card.module.scss';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = (props: CardProps) => {
  const { children, className = '' } = props;

  return <div className={`${styles.card} ${className}`}>{children}</div>;
};

export default Card;
