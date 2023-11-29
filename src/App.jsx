import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Instruction from "./pages/Instruction";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Instruction />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
