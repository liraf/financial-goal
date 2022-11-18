import { useEffect, useMemo, useState } from "react";
import "./Input.scss";

interface InputProps {
  label?: string
  children?: React.ReactNode
  className?: string
  propValue?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  formatNumberInput?: (value: number) => number
}

const Input = (props: InputProps & React.HTMLProps<HTMLInputElement>) => {
  const { label, children = <></>, formatNumberInput, className = '', propValue, onChange, type = 'text', min, max } = props

  const [value, setValue] = useState<string | number>(0)

  const htmlInputProps = useMemo(() => {
    const inputProps:React.HTMLProps<HTMLInputElement> = { type }
    if (min) inputProps.min = min
    if (max) inputProps.max = max
    return inputProps
  }, [type, min, max])

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(event)
    const target = event.target as HTMLInputElement;
    const newValue = target.value;

    setValue(formatNumberInput && type === 'number' ? formatNumberInput(parseInt(newValue, 10)) : newValue)
  }

  useEffect(() => {
    if (propValue) setValue(propValue)
  }, [propValue])

  return (
    <div className={`input ${className}`}>
      {label && <label className="label">{label}</label>}
      <input data-testid="html-input" className="htmlInput" value={value} onChange={onInputChange} {...htmlInputProps} />
      {children}
    </div>
  );
};

export default Input;
