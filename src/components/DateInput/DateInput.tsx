import { useState, useMemo } from "react";
import "./DateInput.scss";

import Input from "../ui/Input/Input";
import ChevronRight from "../ui/SystemIcons/ChevronRight";
import ChevronLeft from "../ui/SystemIcons/ChevronLeft";
import { getMonthOneYearAhead, getMonthByString } from "../../helpers/date";

const DateInput = () => {
  const [value, setValue] = useState<string>(getMonthOneYearAhead().toDateString())

  const month = useMemo(() => {
    return getMonthByString(value)
  }, [value])

  const year = useMemo(() => {
    return new Date(value).getFullYear()
  }, [value])

  const backOneMonth = () => {
    const date = new Date(value)
    date.setMonth(date.getMonth() - 1)
    setValue(date.toDateString())
  }

  const addOneMonth = () => {
    const date = new Date(value)
    date.setMonth(date.getMonth() + 1)
    setValue(date.toDateString())
  }

  return (
    <Input
      className="dateInput"
      label="Reach goal by"
      propValue={value}
      readOnly
    >
      <span className="chevronLeft" onClick={backOneMonth}><ChevronLeft /></span>
      <span className="chevronRight" onClick={addOneMonth}><ChevronRight /></span>
      <div className="inputValue">
        <span className="month">{month}</span>
        <span className="year">{year}</span>
      </div>
    </Input>
  );
};

export default DateInput;
