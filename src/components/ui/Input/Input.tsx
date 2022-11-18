import { useEffect, useState, useRef } from "react";
import IMask from 'imask';
import "./Input.scss";

interface InputProps {
  label?: string
  children?: React.ReactNode
  className?: string
  propValue?: string
  maskOptions?: any
  onInputChange?: (value: string) => void
}

const Input = (props: InputProps & React.HTMLProps<HTMLInputElement>) => {
  const { label, children = <></>, className = '', propValue, maskOptions, onInputChange, type = 'text' } = props

  const [value, setValue] = useState<string | number>(0)
  const [mask, setMask] = useState<any>()

  const htmlInputRef = useRef<any>(null)

  const onInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    let newValue = target.value;

    if (maskOptions) {
      if (onInputChange) onInputChange(mask.unmaskedValue)
    } else {
      if (onInputChange) onInputChange(newValue)
    }

    setValue(newValue)
  }

  useEffect(() => {
    if (maskOptions && htmlInputRef?.current) {
      const newMask = IMask(htmlInputRef?.current, maskOptions)
      setMask(newMask)
    }
  }, [])

  useEffect(() => {
    if (propValue) setValue(propValue)
  }, [propValue])

  return (
    <div className={`input ${className}`}>
      {label && <label className="label">{label}</label>}
      <input data-testid="html-input" ref={htmlInputRef} className="htmlInput" value={value} onInput={onInput} type={type} />
      {children}
    </div>
  );
};

export default Input;
