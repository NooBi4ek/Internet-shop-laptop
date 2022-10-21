import styled from "styled-components";

export const Smallborder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 350px;
  min-height: 300px;
  float: left;
  border: 1px solid #777777;
  border-radius: 5px;
  margin: 10px 30px;
  user-select: none;
  font-size: 18px;
  font-weight: bold;
`;
export const Smallborder_div = styled.div`
  margin-bottom: 30px;
  text-decoration: none;
  color: #000;
`;
export const Smallborder_img = styled.img`
  max-width: 200px;
  max-height: 200px;
  margin: 50px auto;
`;
export const Smallborder_button = styled.button`
  background-color: #000;
  color: #fff;
  padding: 5px 30px;
  border-radius: 5px;
  border: 2px solid ${(props) => (props.click ? "red" : "black")};
  margin: 15px 0 20px 0;
  font-size: 18px;
  transition: 1s;
`;
