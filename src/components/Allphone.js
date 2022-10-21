import { ButtonBusket } from '../styled/styledallphone';
import Onephone from './Onephone';

const Allphone = ({ phone, Setmodal, addToOrder, addItem }) => {
  return (
    <div>
      <ButtonBusket onClick={() => Setmodal(true)}>Open basket</ButtonBusket>
      {phone.map((el) => (
        <div key={el.id}>
          <Onephone phone={el} addToOrder={addToOrder} addItem={addItem} />
        </div>
      ))}
    </div>
  );
};
export default Allphone;
