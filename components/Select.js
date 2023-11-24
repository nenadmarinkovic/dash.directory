import React, { useState, useRef, useEffect } from 'react';
import {
  SelectContainer,
  SelectOptionsContainer,
  SelectButton,
  SelectOption,
} from '../styles/components/select';

const Select = ({ options, onSelect, label = 'Select category' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);

  const handleSelect = (option) => {
    onSelect(option);
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <SelectContainer ref={dropdownRef}>
      <SelectButton onClick={() => setIsOpen(!isOpen)}>
        <span>{label}</span>

        <svg fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
        </svg>
      </SelectButton>
      <SelectOptionsContainer as='div' $isOpen={isOpen}>
        {options.map((option) => (
          <SelectOption key={option} onClick={() => handleSelect(option)}>
            {option}
          </SelectOption>
        ))}
      </SelectOptionsContainer>
    </SelectContainer>
  );
};

export default Select;
