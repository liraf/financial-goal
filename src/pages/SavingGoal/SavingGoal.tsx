import "./SavingGoal.scss";

import Card from "../../components/Card/Card";
import buyHouse from "../../assets/buyHouse.svg"
import AmountInput from "../../components/AmountInput/AmountInput";
import MonthlyAmount from "../../components/MonthlyAmount/MonthlyAmount";
import Button from "../../components/Button/Button";

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

          <div>
            <AmountInput />
          </div>

          <MonthlyAmount value={3222.23} />

          <Button className="confirmButton">Confirm</Button>
        </>
      </Card>
    </div>
  );
};

export default SavingGoal;
