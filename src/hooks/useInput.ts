import { useCallback, useState } from 'react';

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
type UseInputProps<T> = [
  value: T,
  changeHandler: (e: any) => void,
  reset?: () => void,
];

/* eslint-disable @typescript-eslint/no-unnecessary-type-constraint */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
const useInput = <T extends unknown>(initialValue: T): UseInputProps<T> => {
  const [value, setValue] = useState<T>(initialValue);

  const changeHandler = (e: any) => {
    if (e.target) setValue(e.target.value);
  };

  const reset = useCallback(() => setValue(initialValue), [initialValue]);

  return [value, changeHandler, reset];
};

export default useInput;
