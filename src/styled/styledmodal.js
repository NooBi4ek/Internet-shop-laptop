import styled from "styled-components";
export const Modal = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  opacity: ${(props) => (props.modal ? "1" : "0")};
  pointer-events: ${(props) => (props.modal ? "all" : "none")};
`;
export const Modalcontent = styled.div`
  padding: 20px;
  border-radius: 12px;
  background-color: white;
`;
