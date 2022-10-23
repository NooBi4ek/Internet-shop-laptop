import { useSelector } from "react-redux";
import { ButtonBusket } from "../styled/styledallphone";
import Onephone from "./Onephone";

const Allphone = ({ Setmodal }) => {
  const phone = useSelector((state) => state.shop.phones);
  return (
    <div>
      <ButtonBusket onClick={() => Setmodal(true)}>Open basket</ButtonBusket>
      {phone.map((el) => (
        <div key={el.id}>
          <Onephone phone={el} id={el.id} />
        </div>
      ))}
    </div>
  );
};
export default Allphone;
