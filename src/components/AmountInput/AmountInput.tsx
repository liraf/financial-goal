import React from 'react';
import styles from './AmountInput.module.scss';

import Input from '../ui/Input/Input';
import DollarSign from '../ui/SystemIcons/DollarSign';

interface AmountInputProps {
  onChange?: (amount: number) => void;
}

const AmountInput = (props: AmountInputProps) => {
  const { onChange } = props;

  const onInputChange = (value: string) => {
    if (onChange) onChange(parseFloat(value));
  };

  return (
    <Input
      className={styles.amountInput}
      label="Total amount"
      onInputChange={onInputChange}
      maskOptions={{
        mask: Number,
        thousandsSeparator: ',',
        radix: '.',
        max: 1000000000
      }}>
      <span className={styles.dollarSign}>
        <DollarSign />
      </span>
    </Input>
  );
};

export default AmountInput;
