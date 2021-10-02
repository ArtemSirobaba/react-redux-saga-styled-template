import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import Routes from "navigation/routes";
import StyleLayout from 'components/base/styleLayout'
import { store } from "store";

const App = () => {
  return (
    <Provider store={store}>
      <StyleLayout>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </StyleLayout>
    </Provider>
  );
};

export default App;
