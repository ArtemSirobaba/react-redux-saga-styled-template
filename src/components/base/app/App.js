import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import Routes from "navigation/routes";
import StyleLayout from "components/base/styleLayout";
import { store } from "store";
import PageLayout from "../pageLayout/PageLayout";

const App = () => {
  return (
    <Provider store={store}>
      <StyleLayout>
        <BrowserRouter>
          <PageLayout>
            <Routes />
          </PageLayout>
        </BrowserRouter>
      </StyleLayout>
    </Provider>
  );
};

export default App;
