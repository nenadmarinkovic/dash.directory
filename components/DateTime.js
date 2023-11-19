import React, { useState, useEffect } from 'react';
import { DateTimeWrap, DateTimeSeparator } from '../styles/components/datetime';
import { Text } from 'evergreen-ui';
import { useThemeColors } from '../styles/theme';

const DateTimeComponent = ({ theme }) => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const { textMuted } = useThemeColors(theme);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: false };
  const dateOptions = { day: 'numeric', month: 'short' };

  const formattedTime = currentDateTime.toLocaleTimeString('de-DE', timeOptions);
  const formattedDate = currentDateTime.toLocaleDateString('de-DE', dateOptions);

  return (
    <DateTimeWrap>
      <Text fontSize={13} color={textMuted} fontFamily='mono'>
        {formattedTime}
      </Text>
      <DateTimeSeparator>|</DateTimeSeparator>
      <Text fontSize={13} color={textMuted} fontFamily='mono'>
        {formattedDate}
      </Text>
    </DateTimeWrap>
  );
};

export default DateTimeComponent;
