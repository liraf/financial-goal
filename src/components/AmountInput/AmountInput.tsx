import "./AmountInput.scss";

import Input from "../ui/Input/Input";
import DollarSign from "../ui/SystemIcons/DollarSign";
import { formatToCurrency } from "../../helpers/formating";

const AmountInput = () => {
  return (
    <Input
      className="amountInput"
      label="Total amount"
      type="number"
      min="0"
      max="1000000000"
    >
      <span className="dollarSign"><DollarSign /></span>
    </Input>
  );
};

export default AmountInput;
