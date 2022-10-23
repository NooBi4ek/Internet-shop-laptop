import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  One_info_div,
  One_info_img,
  One_info_wrapper,
} from "../styled/styledOnephone_info";

const One_phone_info = () => {
  const phone = useSelector((state) => state.shop.phones);
  const { id } = useParams();
  return (
    <One_info_wrapper>
      {phone.map((el, index) => (
        <div key={index}>
          {el.id == id && (
            <div>
              <One_info_img src={"./img/" + el.img} alt={`${el.name}`} />
              <One_info_div>{el.name}</One_info_div>
              <One_info_div>{el.price}</One_info_div>
            </div>
          )}
        </div>
      ))}
    </One_info_wrapper>
  );
};
export default One_phone_info;
