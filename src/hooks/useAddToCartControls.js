import { useState } from "react";

export const useAddToCartControls = ({ availableQuantity, initialQuantity = 1 }) => {
  console.log("Initial Quantity " + initialQuantity);
  const [quantity, setQuantity] = useState(initialQuantity);
  const [isValid, setIsValid] = useState(true);
  // look into isValid based component behavior

  const incrementQuantity = () =>
    setQuantity((prev) => {
      const num = parseInput(prev);
      const nextNum = num < availableQuantity ? num + 1 : num;
      validate(nextNum);
      return nextNum
    });

  const decrementQuantity = () =>
    setQuantity((prev) => {
      const num = parseInput(prev);
      const nextNum = num > 1 ? num - 1 : num;
      validate(nextNum);
      return nextNum;
    });

  const handleInputChange = (e) => {
    const value = e.target.value;
    validate(value);
    setQuantity((prev) => {
      if (value === "" || value <= "0") return "";
      const num = parseInt(value);
      if (/^$|^[1-9][0-9]*$/.test(num) && num > 0 && num <= availableQuantity)
        return num;
      return prev;
    });
  };

  const parseInput = (input) => {
    const num = parseInt(input);
    if (isNaN(num)) return 1;
    else return num;
  };

  const validate = (input) => {
    if (input > 0 && input <= availableQuantity) return setIsValid(true);
    else return setIsValid(false);
  };

  return {
    quantity,
    isValid,
    incrementQuantity,
    decrementQuantity,
    handleInputChange,
  };
};
