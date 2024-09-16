import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const productList = useSelector((state) => state.reducer);

  //total price
  const totalPrice = productList.reduce(
    (total, data) => total + data.price * (data.quantity || 1),
    0
  );

  //total quantity
  const totalQuantity = productList.reduce(
    (total, data) => total + (data.quantity || 1),
    0
  );
  return (
    <div >
      <header className="container header mt-4">
        <div className="text-center fs-4 mb-2">
          <span  style={{width:"100%"}} className="heading ">E Cart</span>
        </div>
        <div className="contianer d-flex justify-content-between  header-text m-5">
          <p className="fs-4 ms-5">Total Price : $ {totalPrice}</p>
          <p className="fs-4 me-5">Total Quantity : {totalQuantity} items</p>
        </div>
      </header>
    </div>
  );
};

export default Navbar;