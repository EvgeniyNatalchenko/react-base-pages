import React from "react";
import { Link } from "react-router-dom";
import { pageLinks } from "../../constants";
import "./style.scss";

export default function Header() {
  return (
    <header className={"header"}>
      <Link to={pageLinks.home.path}>{pageLinks.home.title}</Link>
      <Link to={pageLinks.cart.path}>{pageLinks.cart.title}</Link>
      <Link to={pageLinks.login.path}>{pageLinks.login.title}</Link>
    </header>
  );
}
