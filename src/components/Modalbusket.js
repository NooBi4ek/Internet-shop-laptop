import { Modal, Modalcontent } from "../styled/styledmodal.js";
import "../App.css";
const Modalbusket = ({ modal, Setmodal }) => {
  return (
    <Modal modal={modal} onClick={() => Setmodal(false)}>
      <Modalcontent onClick={(e) => e.stopPropagation()}>1</Modalcontent>
    </Modal>
  );
};
export default Modalbusket;
