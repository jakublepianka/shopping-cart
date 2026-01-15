import { useState } from "react";

export const useAddToCartControls = ({ availableQuantity }) => {
  const [quantity, setQuantity] = useState(1);
  const [isValid, setIsValid] = useState(true);
  // look into isValid based component behavior

  const incrementQuantity = () =>
    setQuantity((prev) => {
      const num = parseInput(prev);
      const nextNum = num < availableQuantity ? num + 1 : num;
      validate(nextNum);
      return nextNum;
    });

  const decrementQuantity = () =>
    setQuantity((prev) => {
      const num = parseInput(prev);
      const nextNum = num > 1 ? num - 1 : num;
      validate(nextNum);
      return nextNum;
    });

  const handleInputChange = (input) => {
    validate(input);
    setQuantity((prev) => {
      if (input === "" || input <= "0") return "";
      if (input > 0 && input <= availableQuantity)
        return input
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
