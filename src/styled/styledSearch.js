import styled from "styled-components";

export const Search_wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  opacity: ${(props) => (props.modalsearch ? "1" : "0")};
  pointer-events: ${(props) => (props.modalsearch ? "all" : "none")};
  transition: 0.5s;
`;

export const Search_content = styled.div`
  position: relative;
  overflow-y: auto;
  padding: 20px;
  border-radius: 12px;
  background-color: #777777;
  width: 40vw;
  height: 80vh;
`;
