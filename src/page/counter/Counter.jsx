import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { countSelector, randomNumberSelector } from "store/counter/selectors";
import {
  setIncrementCounter,
  setDecrementCounter,
  setResetCounter,
  getRandomNumber,
} from "store/counter/action-creaters";

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
      <input type="submit" value="increment" onClick={handleIncrementCounter} />
      <input type="submit" value="reset" onClick={handleResetCounter} />
      <input type="submit" value="decrement" onClick={handleDecrementCounter} />
      <input
        type="submit"
        value="random number"
        onClick={handleGetRandomNumber}
      />
    </div>
  );
};

export default Counter;
