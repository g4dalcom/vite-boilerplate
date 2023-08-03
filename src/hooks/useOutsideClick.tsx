import React, { useRef } from 'react';
import { useEffect, useState } from 'react';

type useOutsideClickTypes = [
  boolean,
  React.MutableRefObject<HTMLDivElement | null>,
  () => void,
];

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
const useOutsideClick = (): useOutsideClickTypes => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | HTMLInputElement | null>(null);

  const toggleHandler = () => setIsOpen(!isOpen);

  const handleClickOutside = (e: any) => {
    if (ref.current && !ref.current.contains(e.target as Node))
      setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('click', handleClickOutside);
      return () => window.removeEventListener('click', handleClickOutside);
    }
  }, [isOpen]);

  return [isOpen, ref, toggleHandler];
};

export default useOutsideClick;
