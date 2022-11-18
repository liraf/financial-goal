import "./SavingGoal.scss";

import Card from "../../components/ui/Card/Card";
import buyHouse from "../../assets/buyHouse.svg"
import AmountInput from "../../components/AmountInput/AmountInput";
import DateInput from "../../components/DateInput/DateInput";
import MonthlyAmount from "../../components/MonthlyAmount/MonthlyAmount";
import Button from "../../components/ui/Button/Button";

const SavingGoal = () => {
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

          <div className="amountInputContainer"><AmountInput /></div>
          <div className="dateInputContainer"><DateInput /></div>

          <MonthlyAmount value={3222.23} />

          <Button className="confirmButton">Confirm</Button>
        </>
      </Card>
    </div>
  );
};

export default SavingGoal;
