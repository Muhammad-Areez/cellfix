import React from "react";

<<<<<<< HEAD
const TotalCost = ({subtotal, shipping, total}) => {
=======
const TotalCost = () => {
>>>>>>> 44b9ae1c1c044de235c97c977f1aba24915e5325
  return (
    <div className="totalPrices">
      <div className="d_flexBetween">
        <p className="boldText">Subtotal:</p>
<<<<<<< HEAD
        <p className="price">${subtotal}</p>
      </div>
      <div className="d_flexBetween">
        <p className="boldText">Shipping Cost:</p>
        <p className="price">${shipping}</p>
      </div>
      <div className="d_flexBetween">
        <p className="boldText">Total:</p>
        <p className="price">${total}</p>
=======
        <p className="price">$559.00</p>
      </div>
      <div className="d_flexBetween">
        <p className="boldText">Shipping Cost:</p>
        <p className="price">$49.00</p>
      </div>
      <div className="d_flexBetween">
        <p className="boldText">Total:</p>
        <p className="price">$608.00</p>
>>>>>>> 44b9ae1c1c044de235c97c977f1aba24915e5325
      </div>
    </div>
  );
};

export default TotalCost;
