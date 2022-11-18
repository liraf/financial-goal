import "./Button.scss";

export interface ButtonProps {
  children: React.ReactNode
  className?: string
}

const Button = (props: ButtonProps & React.HTMLProps<HTMLButtonElement>) => {
  const { children, className = '', onClick } = props

  return (
    <button className={`button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
