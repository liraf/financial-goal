import React, { useEffect, useState, useMemo } from 'react';
import './MonthlyAmount.scss';

import { formatToCurrency } from '../../helpers/formating';
import { getMonthDiff, getMonthByString } from '../../helpers/date';

interface MonthlyAmountProps {
  amount: number;
  reachDate: string;
}

const MonthlyAmount = (props: MonthlyAmountProps) => {
  const { amount, reachDate } = props;

  const [value, setValue] = useState(0);
  const [monthDiff, setMonthDiff] = useState(0);

  useEffect(() => {
    const monthsDiff = getMonthDiff(new Date(), new Date(reachDate));
    setMonthDiff(monthsDiff);
    const newAmount = Number.isNaN(amount) ? 0 : amount;
    const newMonthlyAmount = Number((newAmount / monthsDiff).toFixed(2));
    setValue(newMonthlyAmount);
  }, [amount, reachDate]);

  const month = useMemo(() => {
    return getMonthByString(reachDate);
  }, [reachDate]);

  const year = useMemo(() => {
    return new Date(reachDate).getFullYear();
  }, [reachDate]);

  return (
    <div className="monthlyAmount">
      <div className="amountContainer">
        <h2 className="title">Monthly amount</h2>
        <span className="amount">${formatToCurrency(value)}</span>
      </div>

      <div className="note">
        You&#39;re planning <b>{monthDiff} monthly deposits</b> to reach your{' '}
        <b>${formatToCurrency(amount)}</b> goal by{' '}
        <b>
          {month} {year}.
        </b>
      </div>
    </div>
  );
};

export default MonthlyAmount;
