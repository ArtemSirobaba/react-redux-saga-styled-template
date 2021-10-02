import React from "react";
import { Content } from "./styles";
import Header from "components/navigations/header/Header";

const PageLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  );
};

export default PageLayout;
