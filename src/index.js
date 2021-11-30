import React, { StrictMode, useContext } from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout";
import "./assets/styles/index.scss";
import Faq from "./components/Faq";
import { BrowserRouter } from "react-router-dom";
import App from "./App";


ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
        <Layout>
          <App />
        </Layout>
    </BrowserRouter>

  </StrictMode>,
  document.getElementById("root")
);
