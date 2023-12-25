import React, { useRef } from "react";
import AddToCart, { CartBtnProps } from "./AddToCart";

const App = () => {
  const cartCountRef: React.ForwardedRef<any> = useRef();
  const cartProps = {
    title: "AddToCart",
    maxVal: 10,
    minVal: 0,
    initialVal: 2,
    ref: cartCountRef,
  };
  const [showval, setShowval] = React.useState<string>("");
  const checkVal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log("check val", cartCountRef.current.outerText, cartCountRef);
    setShowval(cartCountRef.current.outerText);
  };
  return (
    <div>
      <h1>Hello, Welcome to React and TypeScript</h1>
      <AddToCart cartBtnProps={cartProps} />
      <button onClick={checkVal}>Check Value</button>
      <p>{showval}</p>
    </div>
  );
};

export default App;
