import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Instruction from "./pages/Instruction";
import Profile from "./pages/Profile";
import Island from "./pages/Island";
import Pretest from "./pages/Pretest";
import Province from "./pages/Province";
import Culture from "./pages/Culture";
import Food from "./pages/Food";
import House from "./pages/House";
import QuestionPT from "./pages/Q-Posttest";
import AnswerPT from "./pages/A-Posttest";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Instruction />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/island" element={<Island />} />
          <Route path="/province" element={<Province />} />
          <Route path="/pretest" element={<Pretest />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/food" element={<Food />} />
          <Route path="/house" element={<House />} />
          <Route path="/question-posttest" element={<QuestionPT />} />
          <Route path="/answer-posttest" element={<AnswerPT />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
