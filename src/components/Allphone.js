import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ButtonBusket, SearchButton } from "../styled/styledallphone";
import Onephone from "./Onephone";

const Allphone = ({ Setmodal, Setmodalsearch }) => {
  const [filterStart, setfilterStart] = useState("");
  const [filterEnd, setfilterEnd] = useState("");
  const [filter_phone, Setfilter_phone] = useState([]);
  const phone = useSelector((state) => state.shop.phones);
  const filternone = () => {
    Setfilter_phone(phone);
  };
  useEffect(() => {
    filternone();
  }, []);
  const filtered = () => {
    Setfilter_phone(
      phone.filter((el) =>
        el.price >= filterStart && el.price <= filterEnd ? el : null
      )
    );
  };
  return (
    <div>
      <SearchButton onClick={() => Setmodalsearch(true)}>
        Open search
      </SearchButton>
      <ButtonBusket onClick={() => Setmodal(true)}>Open basket</ButtonBusket>
      <input
        placeholder="1 value"
        value={filterStart}
        onChange={(e) => setfilterStart(e.target.value)}
      />
      <input
        placeholder="2 value"
        value={filterEnd}
        onChange={(e) => setfilterEnd(e.target.value)}
      />
      <button onClick={() => filtered()}>Filter</button>
      {filter_phone.map((el) => (
        <div key={el.id}>
          <Onephone phone={el} id={el.id} />
        </div>
      ))}
    </div>
  );
};
export default Allphone;
