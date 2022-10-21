import { Modal, Modalcontent, Modal_div } from '../styled/styledmodal';
import '../App.css';
import Basket from './Basket';

const Modalbusket = ({
  modal,
  Setmodal,
  orders,
  addcount,
  deletecount,
  deleteOrder,
}) => {
  return (
    <Modal modal={modal} onClick={() => Setmodal(false)}>
      <Modalcontent onClick={(e) => e.stopPropagation()}>
        {orders.length > 0 ? (
          orders.map((el) => (
            <Basket
              key={el.id}
              orders={el}
              addcount={addcount}
              deletecount={deletecount}
              deleteOrder={deleteOrder}
            />
          ))
        ) : (
          <Modal_div>This busket is empty</Modal_div>
        )}
      </Modalcontent>
    </Modal>
  );
};
export default Modalbusket;
