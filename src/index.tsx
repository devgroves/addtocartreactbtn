import * as ReactDOM from "react-dom";
import App from "./App";
import AddToCart from "./AddToCart";
import React, { useRef } from "react";

export const AddToCartComponent = AddToCart;
ReactDOM.render(
  <div>
    <h1>Hello, Welcome to React and TypeScript</h1>
    <App />
  </div>,
  document.getElementById("root"),
);
