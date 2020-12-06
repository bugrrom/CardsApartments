// Core
import React from "react";
import ReactDOM from "react-dom";

// Other
import { css, Global } from "@emotion/core";
import { App } from "./bus/App/App";
import { Provider } from "react-redux";
import { store } from "./init/store";

ReactDOM.render(
  <>
    <Provider store={store}>
      <Global
        styles={css`
          body {
            margin: 0;
            padding: 0;
            font-family: "Arial", "sans-serif", "FF Meta Serif", "Bree";
          }
        `}
      />
      <App />
    </Provider>
  </>,
  document.getElementById("root")
);
