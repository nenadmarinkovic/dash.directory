import React, { useState, useEffect } from "react";
import { DateTimeWrap, DateTimeSeparator } from "../styles/components/datetime";
import { Text } from "evergreen-ui";

const DateTimeComponent = ({ theme }) => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  let textMuted = theme === "light" ? "#676f89" : "#8B93A8";

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const timeOptions = { hour: "2-digit", minute: "2-digit", hour12: false };
  const dateOptions = { day: "numeric", month: "short" };

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
      <Text fontSize={14} color={textMuted} fontFamily="mono">
        {formattedTime}
      </Text>
      <DateTimeSeparator>|</DateTimeSeparator>
      <Text fontSize={14} color={textMuted} fontFamily="mono">
        {formattedDate}
      </Text>
    </DateTimeWrap>
  );
};

export default DateTimeComponent;
