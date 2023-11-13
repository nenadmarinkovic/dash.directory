import React, { useState, useEffect } from "react";
import { DateTimeWrap, DateTimeSeparator } from "../styles/components/datetime";
import { Text } from "evergreen-ui";

const DateTimeComponent = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const timeOptions = { hour: "2-digit", minute: "2-digit", hour12: false };
  const dateOptions = { day: "numeric", month: "short", year: "numeric" };

  const formattedTime = currentDateTime.toLocaleTimeString(
    "de-DE",
    timeOptions
  );
  const formattedDate = currentDateTime.toLocaleDateString(
    "de-DE",
    dateOptions
  );

  return (
    <DateTimeWrap>
      <Text fontFamily="mono">{formattedTime}</Text>
      <DateTimeSeparator>|</DateTimeSeparator>
      <Text fontFamily="mono">{formattedDate}</Text>
    </DateTimeWrap>
  );
};

export default DateTimeComponent;
