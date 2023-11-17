import React, { useState, useRef, useEffect } from 'react'
import {
  CustomSelectContainer,
  CustomOptionsContainer,
  CustomSelectButton,
  CustomOption
} from '../styles/components/customSelect'

const CustomSelect = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)
  const dropdownRef = useRef(null)

  const handleSelect = (option) => {
    onSelect(option)
    setSelectedOption(option)
    setIsOpen(false)
  }

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('click', handleClickOutside)
    return () => {
      window.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <CustomSelectContainer ref={dropdownRef}>
      <CustomSelectButton onClick={() => setIsOpen(!isOpen)}>
        <span>Select category</span>

        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </CustomSelectButton>
      <CustomOptionsContainer as="div" $isOpen={isOpen}>
        {options.map((option) => (
          <CustomOption key={option} onClick={() => handleSelect(option)}>
            {option}
          </CustomOption>
        ))}
      </CustomOptionsContainer>
    </CustomSelectContainer>
  )
}

export default CustomSelect
