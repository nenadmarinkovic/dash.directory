import React, { useEffect, useCallback } from 'react';
import { DropdownContainer, DropdownButton, DropdownList } from '../styles/components/dropdown';

const Dropdown = ({ children, isOpen, onToggle }) => {
  const handleOutsideClick = useCallback(
    (event) => {
      if (isOpen && !event.target.closest('.custom-dropdown')) {
        onToggle(false);
      }
    },
    [isOpen, onToggle],
  );

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [handleOutsideClick]);

  return (
    <DropdownContainer className='custom-dropdown'>
      <DropdownButton onClick={() => onToggle(!isOpen)}>
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
      <DropdownList as='div' $isOpen={isOpen}>
        {children}
      </DropdownList>
    </DropdownContainer>
  );
};

export default Dropdown;
