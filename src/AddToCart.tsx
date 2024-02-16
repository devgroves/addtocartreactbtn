import React, { forwardRef, useImperativeHandle } from "react";

export type CartBtnProps = {
  title: string;
  minVal: number;
  initialVal: number;
  maxVal: number;
  ref: React.MutableRefObject<any>;
};

const AddToCart: React.FC<{
  cartBtnProps: CartBtnProps;
}> = ({ cartBtnProps }) => {
  const [currVal, setCurrVal] = React.useState<number>(cartBtnProps.initialVal);
  const addToCartBtnClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    console.log("addToCartBtnClick");
    setCurrVal(1);
  };
  const increaseBtnClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    console.log("increaseBtnClick");
    setCurrVal(currVal < cartBtnProps.maxVal ? currVal + 1 : currVal);
  };
  const decreaseBtnClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    console.log("decreaseBtnClick");
    if (currVal > 0) {
      setCurrVal(currVal - 1);
    }
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: "#eb5e28ca",
          display: "inline-block",
          borderRadius: "5px",
          color: "white",
        }}
      >
        {currVal > 0 ? (
          <div>
            <button
              style={{ all: "unset", padding: "7px 10px" }}
              onClick={increaseBtnClick}
            >
              +
            </button>
            <span
              style={{ display: "inline-block", padding: "7px", width: "20px" }}
              ref={cartBtnProps.ref}
            >
              {currVal}
            </span>
            <button
              style={{ all: "unset", padding: "7px 10px" }}
              onClick={decreaseBtnClick}
            >
              -
            </button>
          </div>
        ) : (
          <div>
            <button
              style={{
                all: "unset",
                padding: "8px",
                fontSize: "14px",
                fontFamily: "Inter",
              }}
              onClick={addToCartBtnClick}
            >
              {cartBtnProps.title}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddToCart;
