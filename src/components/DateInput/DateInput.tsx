import { useState } from "react";
import "./DateInput.scss";

import Input from "../ui/Input/Input";
import ChevronRight from "../ui/SystemIcons/ChevronRight";
import ChevronLeft from "../ui/SystemIcons/ChevronLeft";
import { getMonthOneYearAhead } from "../../helpers/date";

const DateInput = () => {
  const [value, setValue] = useState<string>(getMonthOneYearAhead().toDateString())

  return (
    <Input
      className="dateInput"
      label="Reach goal by"
      propValue={value}
      readOnly
    >
      <span className="chevronLeft"><ChevronLeft /></span>
      <span className="chevronRight"><ChevronRight /></span>
    </Input>
  );
};

export default DateInput;
