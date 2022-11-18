import { useState, useMemo, useRef, useCallback } from "react";
import "./DateInput.scss";

import Input from "../ui/Input/Input";
import ChevronRight from "../ui/SystemIcons/ChevronRight";
import ChevronLeft from "../ui/SystemIcons/ChevronLeft";
import useKeyboardShortcut from "../../helpers/hooks/useKeyboardShortcut";
import { getMonthOneYearAhead, getMonthByString, isSameOrPreviousMonth } from "../../helpers/date";

const DateInput = () => {
  const [value, setValue] = useState<string>(getMonthOneYearAhead().toDateString())

  const inputRef = useRef<any>(null)

  const month = useMemo(() => {
    return getMonthByString(value)
  }, [value])

  const year = useMemo(() => {
    return new Date(value).getFullYear()
  }, [value])

  const backOneMonth = () => {
    focusInput()
    const date = new Date(value)
    date.setMonth(date.getMonth() - 1)

    if (isSameOrPreviousMonth(date)) return // Only allow one month from now

    setValue(date.toDateString())
  }

  const addOneMonth = () => {
    focusInput()
    const date = new Date(value)
    date.setMonth(date.getMonth() + 1)
    setValue(date.toDateString())
  }

  const focusInput = () => {
    const input = inputRef?.current?.getElementsByClassName('htmlInput')[0]
    if (document.activeElement !== input) input.focus()
  }

  const onKeyPress = useCallback((event: KeyboardEvent) => {
    const input = inputRef?.current?.getElementsByClassName('htmlInput')[0]
    if (!input || document.activeElement !== input) return

    if (event.code === 'ArrowLeft') backOneMonth()
    else addOneMonth()
  }, [inputRef?.current, backOneMonth, addOneMonth])
  useKeyboardShortcut(['ArrowLeft', 'ArrowRight'], onKeyPress)

  return (
    <div ref={inputRef}>
      <Input
        className="dateInput"
        label="Reach goal by"
        propValue={value}
      >
        <span className="chevronLeft" data-testid="month-back" onClick={backOneMonth}><ChevronLeft /></span>
        <span className="chevronRight" data-testid="month-ahead" onClick={addOneMonth}><ChevronRight /></span>
        <div className="inputValue" data-testid="month-label" onClick={focusInput}>
          <span className="month">{month}</span>
          <span className="year">{year}</span>
        </div>
      </Input>
    </div>
  );
};

export default DateInput;
