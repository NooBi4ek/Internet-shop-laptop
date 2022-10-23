import { useState } from "react";
import Allphone from "./components/Allphone";
import Modalbusket from "./components/Modalbusket";
import { Route, Routes } from "react-router-dom";
import One_phone_info from "./components/One_phone_info";

const App = () => {
  const [modal, Setmodal] = useState(false);
  return (
    <div>
      <Modalbusket modal={modal} Setmodal={Setmodal} />
      <Routes>
        <Route path="/:id" element={<One_phone_info />} />
        <Route path="/" element={<Allphone Setmodal={Setmodal} />} />
      </Routes>
    </div>
  );
};
export default App;
