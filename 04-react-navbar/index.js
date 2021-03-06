import singleSpaReact from "single-spa-react";
import * as React from "react";
import * as ReactDOM from "react-dom";
import Root from "./Root";

window.reactNavbar = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
});
