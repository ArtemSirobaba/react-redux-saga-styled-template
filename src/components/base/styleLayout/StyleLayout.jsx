import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "constants/globalStyle";

const StyleLayout = ({ children }) => {
  return (
    <ThemeProvider theme={{}}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default StyleLayout;
