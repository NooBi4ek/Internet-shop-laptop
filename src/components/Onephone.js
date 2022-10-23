import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToOrder, addItem } from "../redux/shopSlice";
import {
  Smallborder,
  Smallborder_img,
  Smallborder_div,
  Smallborder_button,
} from "../styled/styledOnephone";

const Onephone = ({ phone, id }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Smallborder>
        <Link to={`/${phone.id}`}>
          <Smallborder_img src={"./img/" + phone.img} />
        </Link>
        <Link to={`/${phone.id}`}>
          <Smallborder_div>{phone.name}</Smallborder_div>
        </Link>
        <Link to={`/${phone.id}`}>
          <Smallborder_div>{phone.price} UAH</Smallborder_div>
        </Link>
        <Smallborder_button
          onClick={() => {
            dispatch(addToOrder({ phone }));
            dispatch(addItem({ id }));
          }}
          click={phone.click}
          disabled={phone.click ? true : false}
        >
          {phone.click ? "In the box" : "Buy"}
        </Smallborder_button>
      </Smallborder>
    </div>
  );
};
export default Onephone;
