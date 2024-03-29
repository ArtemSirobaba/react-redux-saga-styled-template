import React from "react";
import { ButtonWrapper } from "./styles";

const Button = ({ title, onClick }) => {
  return <ButtonWrapper onClick={onClick}>{title}</ButtonWrapper>;
};

export default Button;
