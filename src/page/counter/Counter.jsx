import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { countSelector, randomNumberSelector } from "store/counter/selectors";
import {
  setIncrementCounter,
  setDecrementCounter,
  setResetCounter,
  getRandomNumber,
} from "store/counter/action-creaters";
import Button from "components/base/buttons/button";

const Counter = () => {
  const dispatch = useDispatch();

  const count = useSelector(countSelector);
  const randomNumber = useSelector(randomNumberSelector);

  useEffect(() => {
    dispatch(getRandomNumber());
  }, [dispatch]);

  const handleIncrementCounter = () => {
    dispatch(setIncrementCounter());
  };

  const handleDecrementCounter = () => {
    dispatch(setDecrementCounter());
  };

  const handleResetCounter = () => {
    dispatch(setResetCounter());
  };

  const handleGetRandomNumber = () => {
    dispatch(getRandomNumber());
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <h1>Random number: {randomNumber}</h1>
      <Button title="Increment" onClick={handleIncrementCounter} />
      <Button title="Reset" onClick={handleResetCounter} />
      <Button title="Decrement" onClick={handleDecrementCounter} />
      <Button title="Random number" onClick={handleGetRandomNumber} />
    </div>
  );
};

export default Counter;
