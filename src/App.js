import { useState } from "react";
import Allphone from "./components/Allphone";
import Modalbusket from "./components/Modalbusket";
import { phones } from "./db";
const App = () => {
  const [phone, Setphones] = useState(phones);
  const [modal, Setmodal] = useState(false);
  //Добавление количества товара
  /* const addcount = (id) => {
    const countplus = phone.map((el) =>
      el.id === id ? { ...el, count: el.count + 1 } : el,
    );
    Setphones(countplus);
  };
  */
  return (
    <div>
      <button onClick={() => Setmodal(true)}>Open</button>
      <Allphone phone={phone} />
      <Modalbusket modal={modal} Setmodal={Setmodal} />
    </div>
  );
};
export default App;
