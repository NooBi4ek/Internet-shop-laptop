import {
  Smallborder,
  Smallborder_img,
  Smallborder_div,
} from "../styled/styledOnePhone";

const Onephone = ({ phone }) => {
  return (
    <div>
      <Smallborder>
        <Smallborder_img src={"./img/" + phone.img} />
        <Smallborder_div>{phone.name}</Smallborder_div>
        <Smallborder_div>{phone.price * phone.count} UAH</Smallborder_div>
      </Smallborder>
    </div>
  );
};
export default Onephone;
