import { Modal, Modalcontent, Modal_div } from "../styled/styledmodal";
import "../App.css";
import Basket from "./Basket";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Countsum } from "../redux/shopSlice";

const Modalbusket = ({ modal, Setmodal }) => {
  const orders = useSelector((state) => state.shop.orders);
  let sum = 0;
  orders.forEach((el) => {
    sum += el.count * el.price;
  });
  return (
    <Modal modal={modal} onClick={() => Setmodal(false)}>
      <Modalcontent onClick={(e) => e.stopPropagation()}>
        {orders.length > 0 ? (
          <div>
            {orders.map((el) => (
              <Basket key={el.id} orders={el} id={el.id} />
            ))}
            <div> Total sum: {sum}</div>
          </div>
        ) : (
          <Modal_div>This busket is empty</Modal_div>
        )}
      </Modalcontent>
    </Modal>
  );
};
export default Modalbusket;
