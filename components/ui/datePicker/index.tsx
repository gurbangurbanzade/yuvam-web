"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./style.scss";

interface IProps {
  value: any;
  onChange: any;
}

function Datepicker({ value, onChange }: IProps) {
  //   const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(value || null);

  const NextMonthButton = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 18L15 12L9 6"
        stroke="white"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  // hefte sonunu deaktiv etmek
  // const isWeekend = (date: Date) => {
  //   const day = date.getDay();
  //   return day === 0 || day === 6;
  // };

  const isSameDay = (date: Date, selectedDate: Date) => {
    return (
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
    );
  };

  const isPastDate = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  return (
    <DatePicker
      previousMonthButtonLabel={NextMonthButton}
      nextMonthButtonLabel={NextMonthButton}
      minDate={new Date()}
      selected={selectedDate}
      onChange={(date) => {
        onChange(date);
        setSelectedDate(date);
      }}
      dateFormat="dd/MM/yyyy"
      isClearable
      inline
      placeholderText="__/ __/ ____"
      dayClassName={(date) =>
        isPastDate(date)
          ? "past-date"
          : // hefte sonunu deaktiv etmek
          // : isWeekend(date)
          // ? "weekend"
          isSameDay(date, selectedDate || new Date())
          ? "selected"
          : ""
      }
    />
  );
}

export default Datepicker;
