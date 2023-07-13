import { Route, Routes } from "react-router-dom";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <Routes>
      <Route path="/checkout/config" element={<Checkout />} />
    </Routes>
  );
}

export default App;
