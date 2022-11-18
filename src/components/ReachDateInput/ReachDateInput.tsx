import React, { useState, useMemo, useRef, useEffect } from 'react';
import './ReachDateInput.scss';

import Input from '../ui/Input/Input';
import ChevronRight from '../ui/SystemIcons/ChevronRight';
import ChevronLeft from '../ui/SystemIcons/ChevronLeft';
import useKeyboardShortcut from '../../helpers/hooks/useKeyboardShortcut';
import { getMonthOneYearAhead, getMonthByString, isSameOrPreviousMonth } from '../../helpers/date';

interface ReachDateInputProps {
  onChange?: (reachDate: string) => void;
}

const ReachDateInput = (props: ReachDateInputProps) => {
  const { onChange } = props;

  const [value, setValue] = useState<string>(getMonthOneYearAhead().toDateString());

  const inputRef = useRef<HTMLInputElement>(null);

  const month = useMemo(() => {
    return getMonthByString(value);
  }, [value]);

  const year = useMemo(() => {
    return new Date(value).getFullYear();
  }, [value]);

  const backOneMonth = () => {
    focusInput();
    const date = new Date(value);
    date.setMonth(date.getMonth() - 1);

    if (isSameOrPreviousMonth(date)) return; // Only allow one month from now

    setValue(date.toDateString());
  };

  const addOneMonth = () => {
    focusInput();
    const date = new Date(value);
    date.setMonth(date.getMonth() + 1);
    setValue(date.toDateString());
  };

  const focusInput = () => {
    const input = inputRef?.current?.getElementsByClassName('htmlInput')[0] as HTMLElement;
    if (document.activeElement !== input) input?.focus();
  };

  const onKeyPress = (event: KeyboardEvent) => {
    const input = inputRef?.current?.getElementsByClassName('htmlInput')[0];
    if (!input || document.activeElement !== input) return;

    if (event.code === 'ArrowLeft') backOneMonth();
    else addOneMonth();
  };
  useKeyboardShortcut(['ArrowLeft', 'ArrowRight'], onKeyPress);

  useEffect(() => {
    if (onChange) onChange(value);
  }, [value, onChange]);

  return (
    <div ref={inputRef}>
      <Input className="reachDateInput" label="Reach goal by" propValue={value} readOnly>
        <span className="chevronLeft" data-testid="month-back" onClick={backOneMonth}>
          <ChevronLeft />
        </span>
        <span className="chevronRight" data-testid="month-ahead" onClick={addOneMonth}>
          <ChevronRight />
        </span>
        <div className="inputValue" data-testid="month-label" onClick={focusInput}>
          <span className="month">{month}</span>
          <span className="year">{year}</span>
        </div>
      </Input>
    </div>
  );
};

export default ReachDateInput;
