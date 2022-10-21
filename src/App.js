import { useState } from "react";
import { phones, order } from "./db";
import Allphone from "./components/Allphone";
import Modalbusket from "./components/Modalbusket";
import { Route, Routes } from "react-router-dom";
import One_phone_info from "./components/One_phone_info";

const App = () => {
  const [phone, Setphones] = useState(phones);
  const [modal, Setmodal] = useState(false);
  const [orders, Setorders] = useState(order);
  const addToOrder = (phone) => {
    let isArr = false;
    orders.forEach((el) => {
      if (el.id === phone.id) {
        isArr = true;
      }
    });
    if (!isArr) {
      Setorders([...orders, phone]);
    }
  };
  const DB = () => {
    return null;
  };
  //Добавление количества товара
  const addcount = (id) => {
    const countplus = orders.map((el) =>
      el.id === id ? { ...el, count: el.count + 1 } : el
    );
    Setorders(countplus);
  };
  const deletecount = (id) => {
    const countminus = orders.map((el) =>
      el.id === id ? { ...el, count: el.count - 1 } : el
    );
    Setorders(countminus);
  };
  const deleteOrder = (id) => {
    const deleteor = orders.filter((el) => el.id !== id);
    Setorders(deleteor);
    const phonesremove = phone.map((el) =>
      el.id === id ? { ...el, click: false } : el
    );
    Setphones(phonesremove);
  };
  const addItem = (id) => {
    const phonesadd = phone.map((el) =>
      el.id === id ? { ...el, click: true } : el
    );
    Setphones(phonesadd);
  };
  return (
    <div>
      <Modalbusket
        modal={modal}
        Setmodal={Setmodal}
        orders={orders}
        addcount={addcount}
        deletecount={deletecount}
        deleteOrder={deleteOrder}
      />
      <Routes>
        <Route path="/:id" element={<One_phone_info phone={phone} />} />
        <Route
          path="/"
          element={
            <Allphone
              phone={phone}
              Setmodal={Setmodal}
              addToOrder={addToOrder}
              addItem={addItem}
            />
          }
        />
      </Routes>
    </div>
  );
};
export default App;
