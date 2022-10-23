import { useDispatch } from "react-redux";
import { addcount, deletecount, deleteOrder } from "../redux/shopSlice";
import {
  Basket_button,
  Basket_div,
  Basket_img,
  Basket_wrapper,
} from "../styled/styledBasket";

const Basket = ({ orders, id }) => {
  const dispatch = useDispatch();
  return (
    <Basket_wrapper>
      <Basket_img src={"./img/" + orders.img} />
      <Basket_div>
        <div>{orders.name}</div>
        <div>{orders.price * orders.count} UAH</div>
        <div>{orders.count}</div>
        <Basket_button
          onClick={() => {
            dispatch(addcount({ id }));
          }}
        >
          Add count
        </Basket_button>
        <Basket_button
          onClick={() => {
            orders.count > 1
              ? dispatch(deletecount({ id }))
              : dispatch(deleteOrder({ id }));
          }}
        >
          Delete count
        </Basket_button>
      </Basket_div>
    </Basket_wrapper>
  );
};
export default Basket;
