import React from "react";
import { Link } from "react-router-dom";
import { HeaderWrapper } from "./styles";

const Header = () => {
  return (
    <HeaderWrapper>
      <Link to="/">Dashboard</Link>
      <Link to="/counter">Counter</Link>
    </HeaderWrapper>
  );
};

export default Header;
