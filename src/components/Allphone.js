import styled from "styled-components";
import Onephone from "./Onephone";
const Border = styled.div`
  border: 1px solid #000;
`;
const Allphone = ({ phone }) => {
  return (
    <div>
      <Border>
        {phone.map((el) => (
          <div key={el.id}>
            <Onephone phone={el} />
          </div>
        ))}
      </Border>
    </div>
  );
};
export default Allphone;
