import "./SavingGoal.scss";

import Card from "../../components/Card/Card";
import buyHouse from "../../assets/buyHouse.svg"

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
              <h2 className="subtitle">Saving goal</h2>
            </div>
          </div>
        </>
      </Card>
    </div>
  );
};

export default SavingGoal;
