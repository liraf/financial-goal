import { useMemo } from "react";
import "./Input.scss";

interface InputProps {
  label?: string
  children?: React.ReactNode
}

const Input = (props: InputProps & React.HTMLProps<HTMLInputElement>) => {
  const { label, type = 'text', min, max, children = <></> } = props

  const htmlInputProps = useMemo(() => {
    const inputProps:React.HTMLProps<HTMLInputElement> = { type }
    if (min) inputProps.min = min
    if (max) inputProps.max = max
    return inputProps
  }, [type, min, max])

  return (
    <div className="input">
      {label && <label className="label">{label}</label>}
      <input className="htmlInput" {...htmlInputProps} />
      {children}
    </div>
  );
};

export default Input;
