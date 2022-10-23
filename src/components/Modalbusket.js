import { Modal, Modalcontent, Modal_div } from "../styled/styledmodal";
import "../App.css";
import Basket from "./Basket";
import { useSelector } from "react-redux";

const Modalbusket = ({
  modal,
  Setmodal,
  addcount,
  deletecount,
  deleteOrder,
}) => {
  const orders = useSelector((state) => state.shop.orders);
  {
    console.log({ orders });
  }
  return (
    <Modal modal={modal} onClick={() => Setmodal(false)}>
      <Modalcontent onClick={(e) => e.stopPropagation()}>
        {orders.length > 0 ? (
          orders.map((el) => <Basket key={el.id} orders={el} id={el.id} />)
        ) : (
          <Modal_div>This busket is empty</Modal_div>
        )}
      </Modalcontent>
    </Modal>
  );
};
export default Modalbusket;
