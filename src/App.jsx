import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/checkout/:type" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
