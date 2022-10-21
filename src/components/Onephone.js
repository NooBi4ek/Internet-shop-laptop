import { Link } from 'react-router-dom';
import {
  Smallborder,
  Smallborder_img,
  Smallborder_div,
  Smallborder_button,
} from '../styled/styledOnephone';

const Onephone = ({ phone, addToOrder, addItem }) => {
  return (
    <div>
      <Smallborder>
        <Link to={`/${phone.id}`}>
          <Smallborder_img src={'./img/' + phone.img} />
        </Link>
        <Link to={`/${phone.id}`}>
          <Smallborder_div>{phone.name}</Smallborder_div>
        </Link>
        <Link to={`/${phone.id}`}>
          <Smallborder_div>{phone.price} UAH</Smallborder_div>
        </Link>
        <Smallborder_button
          onClick={() => {
            addToOrder(phone);
            addItem(phone.id);
          }}
          click={phone.click}
        >
          {phone.click ? 'In the box' : 'Buy'}
        </Smallborder_button>
      </Smallborder>
    </div>
  );
};
export default Onephone;
