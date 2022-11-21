import React, { useEffect, useState, useRef } from 'react';
import IMask from 'imask';
import styles from './Input.module.scss';

interface InputProps {
  label: string;
  children?: React.ReactNode;
  className?: string;
  propValue?: string;
  maskOptions?: IMask.AnyMaskedOptions;
  onInputChange?: (value: string) => void;
}

const Input = (props: InputProps & React.HTMLProps<HTMLInputElement>) => {
  const {
    label,
    children = <></>,
    className = '',
    propValue,
    maskOptions,
    onInputChange,
    type = 'text', // eslint-disable-line react/prop-types
    readOnly = false // eslint-disable-line react/prop-types
  } = props;

  const [value, setValue] = useState('');
  const [mask, setMask] = useState<IMask.InputMask<IMask.AnyMaskedOptions>>();

  const htmlInputRef = useRef<HTMLInputElement>(null);

  const onInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const newValue = target.value;

    if (maskOptions) {
      if (onInputChange) onInputChange(mask?.unmaskedValue || '');
    } else {
      if (onInputChange) onInputChange(newValue);
    }

    setValue(newValue);
  };

  useEffect(() => {
    if (maskOptions && htmlInputRef?.current && type === 'text') {
      const newMask = IMask(htmlInputRef?.current, maskOptions);
      setMask(newMask);
    }
  }, []);

  useEffect(() => {
    if (propValue) setValue(propValue);
  }, [propValue]);

  return (
    <div className={`${styles.input} ${className}`}>
      <label className={styles.label}>{label}</label>
      <input
        data-testid="html-input"
        ref={htmlInputRef}
        className={styles.htmlInput}
        value={value}
        onInput={onInput}
        readOnly={readOnly}
        type={type}
      />
      {children}
    </div>
  );
};

export default Input;
