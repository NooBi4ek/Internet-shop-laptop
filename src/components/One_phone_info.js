import { useParams } from "react-router-dom";
import { One_info_div, One_info_img } from "../styled/styledOnephone_info";

const One_phone_info = ({ phone }) => {
  const { id } = useParams();
  return (
    <One_info_div>
      {phone.map((el, index) => (
        <div key={index}>
          {el.id == id && (
            <div>
              <One_info_img src={"./img/" + el.img} alt={`${el.name}`} />
              <div>{el.name}</div>
            </div>
          )}
        </div>
      ))}
    </One_info_div>
  );
};
export default One_phone_info;
