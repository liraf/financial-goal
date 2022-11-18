import "./DateInput.scss";

import Input from "../Input/Input";

const DateInput = () => {
  return (
    <Input
      className="dateInput"
      label="Reach goal by"
      type="number"
      min="0"
      max="1000000000"
    >
    </Input>
  );
};

export default DateInput;
