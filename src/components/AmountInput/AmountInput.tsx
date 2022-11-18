import React from 'react';
import './AmountInput.scss';

import Input from '../ui/Input/Input';
import DollarSign from '../ui/SystemIcons/DollarSign';

interface AmountInputProps {
  onChange?: (amount: number) => void;
}

const AmountInput = (props: AmountInputProps) => {
  const { onChange } = props;

  const onInputChange = (value: string) => {
    if (onChange) onChange(parseInt(value, 10));
  };

  return (
    <Input
      className="amountInput"
      label="Total amount"
      onInputChange={onInputChange}
      maskOptions={{
        mask: Number,
        scale: 2,
        signed: false,
        thousandsSeparator: ',',
        padFractionalZeros: false,
        normalizeZeros: true
      }}>
      <span className="dollarSign">
        <DollarSign />
      </span>
    </Input>
  );
};

export default AmountInput;
