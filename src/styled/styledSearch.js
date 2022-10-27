import styled from "styled-components";

export const Search_wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  opacity: ${(props) => (props.modalsearch ? "1" : "0")};
  pointer-events: ${(props) => (props.modalsearch ? "all" : "none")};
  transition: 0.5s;
`;

export const Search_content = styled.div`
  margin-top: 2%;
  position: relative;
  overflow-y: auto;
  padding: 20px;
  border-radius: 12px;
  background-color: #fff;
  width: 15vw;
  height: 60vh;
`;

export const Search_input = styled.input`
  width: 13vw;
`;
