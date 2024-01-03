import React from "react";

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
  // useImperativeHandle(ref, ()=>({
  //   getCurrentVal: () => {
  //     return currVal;
  //   }
  // }))
  return (
    <div>
      {currVal > 0 ? (
        <div>
          <button onClick={increaseBtnClick}>+</button>
          <span ref={cartBtnProps.ref}>{currVal}</span>
          <button onClick={decreaseBtnClick}>-</button>
        </div>
      ) : (
        <div>
          <button onClick={addToCartBtnClick}>{cartBtnProps.title}</button>
        </div>
      )}
    </div>
  );
};

export default AddToCart;
