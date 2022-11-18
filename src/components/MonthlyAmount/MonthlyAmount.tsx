import { useEffect, useState } from "react";
import "./MonthlyAmount.scss";

import { formatToCurrency } from "../../helpers/formating";
import { getMonthDiff } from "../../helpers/date";

interface MonthlyAmountProps {
  amount: number
  reachDate: string
}

const MonthlyAmount = (props: MonthlyAmountProps) => {
  const { amount, reachDate } = props

  const [value, setValue] = useState(0)

  useEffect(() => {
    const monthsDiff = getMonthDiff(new Date(), new Date(reachDate))
    const newAmount = Number.isNaN(amount) ? 0 : amount // TODO: verify if isNan is necessary
    const newMonthlyAmount = Number((newAmount / monthsDiff).toFixed(2))
    setValue(newMonthlyAmount)
  }, [amount, reachDate])

  return (
    <div className="monthlyAmount">
      <div className="amountContainer">
        <h2 className="title">Monthly amount</h2>
        <span className="amount">${formatToCurrency(value)}</span>
      </div>

      {/* TODO: add goal and date variables */ }
      <div className="note">You&#39;re planning <b>48 monthly deposits</b> to reach your <b>$25,000</b> goal by <b>October 2020.</b></div>
    </div>
  );
};

export default MonthlyAmount;
