import "./App.css";
import HomePage from "./Pages/homePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OnBoarding from "./pages/OnBoarding";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/onboarding" element={<OnBoarding />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
