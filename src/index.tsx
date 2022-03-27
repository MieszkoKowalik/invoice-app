import React from "react";
import ReactDOM from "react-dom";
import Root from "./views/Root";
import "./firebase";
import AppProviders from "providers/AppProviders";
import MainTemplate from "components/templates/MainTemplate/MainTemplate";

ReactDOM.render(
  <React.StrictMode>
    <AppProviders>
      <MainTemplate>
        <Root />
      </MainTemplate>
    </AppProviders>
  </React.StrictMode>,
  document.getElementById("root")
);
