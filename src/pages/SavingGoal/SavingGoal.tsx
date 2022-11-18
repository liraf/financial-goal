import { useEffect, useState } from "react";
import "./SavingGoal.scss";

import Card from "../../components/ui/Card/Card";
import buyHouse from "../../assets/buyHouse.svg"
import AmountInput from "../../components/AmountInput/AmountInput";
import DateInput from "../../components/DateInput/DateInput";
import MonthlyAmount from "../../components/MonthlyAmount/MonthlyAmount";
import Button from "../../components/ui/Button/Button";
import { getMonthDiff } from "../../helpers/date";

const SavingGoal = () => {
  const [reachDate, setReachDate] = useState('')
  const [amount, setAmount] = useState(0)
  const [monthlyAmount, setMonthlyAmount] = useState(0)

  const onAmountChange = (value: number) => {
    setAmount(value)
  }

  const onReachDateChange = (date: string) => {
    setReachDate(date)
  }

  useEffect(() => {
    const monthsDiff = getMonthDiff(new Date(), new Date(reachDate))
    const newAmount = Number.isNaN(amount) ? 0 : amount
    const newMonthlyAmount = Number((newAmount / monthsDiff).toFixed(2))
    setMonthlyAmount(newMonthlyAmount)
  }, [amount, reachDate])

  return (
    <div className="savingGoal">
      <div className="phrase">Let's plan your <b>saving goal.</b></div>

      <Card className="savingCard">
        <>
          <div className="cardHeader">
            <img className="buyHouse" src={buyHouse} alt="Buy a house" />
            <div>
              <h1 className="title">Buy a house</h1>
              <h3 className="subtitle">Saving goal</h3>
            </div>
          </div>

          <div className="amountInputContainer">
            <AmountInput onChange={onAmountChange} />
          </div>
          <div className="dateInputContainer">
            <DateInput onChange={onReachDateChange} />
          </div>

          <MonthlyAmount value={monthlyAmount} />

          <Button className="confirmButton">Confirm</Button>
        </>
      </Card>
    </div>
  );
};

export default SavingGoal;
