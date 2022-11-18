import "./AmountInput.scss";

import Input from "../ui/Input/Input";
import DollarSign from "../ui/SystemIcons/DollarSign";
import { formatToCurrency } from "../../helpers/formating";

interface AmountInputProps {
	onChange: (amount: number) => void
}

const AmountInput = (props: AmountInputProps) => {
  const { onChange } = props

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(parseInt(event?.target?.value, 10))
  }

  return (
    <Input
      className="amountInput"
      label="Total amount"
      type="number"
      min="0"
      max="1000000000"
      onChange={onInputChange}
    >
      <span className="dollarSign"><DollarSign /></span>
    </Input>
  );
};

export default AmountInput;
