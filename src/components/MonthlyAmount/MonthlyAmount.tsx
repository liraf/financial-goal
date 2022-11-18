import "./MonthlyAmount.scss";

import { formatToCurrency } from "../../helpers/formating";

interface MonthlyAmountProps {
  value: number
}

const MonthlyAmount = (props: MonthlyAmountProps) => {
  const { value } = props

  return (
    <div className="monthlyAmount">
      <div className="amountContainer">
        <h2 className="title">Monthly amount</h2>
        <span className="amount">${formatToCurrency(value)}</span>
      </div>

      <div className="note">You&#39;re planning <b>48 monthly deposits</b> to reach your <b>$25,000</b> goal by <b>October 2020.</b></div>
    </div>
  );
};

export default MonthlyAmount;
