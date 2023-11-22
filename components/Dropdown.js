import React, { useState, useEffect, useRef } from 'react';
import { DropdownContainer, DropdownButton, DropdownList } from '../styles/components/dropdown';

const Dropdown = ({ children, isOpen }) => {
  const [$isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ $top: 0, $left: 0 });
  const buttonRef = useRef(null);

  const handleToggle = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({ $top: rect.bottom, $left: rect.left });
    }
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if ($isOpen && buttonRef.current && !buttonRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleScrollAndResize = () => {
      if ($isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    window.addEventListener('scroll', handleScrollAndResize);
    window.addEventListener('resize', handleScrollAndResize);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
      window.removeEventListener('scroll', handleScrollAndResize);
      window.removeEventListener('resize', handleScrollAndResize);
    };
  }, [$isOpen, buttonRef]);

  return (
    <DropdownContainer>
      <DropdownButton ref={buttonRef} onClick={handleToggle}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z'
          />
        </svg>
      </DropdownButton>
      <DropdownList $isOpen={$isOpen} $top={position.$top} $left={position.$left}>
        {children}
      </DropdownList>
    </DropdownContainer>
  );
};

export default Dropdown;
