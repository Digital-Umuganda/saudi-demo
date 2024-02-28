import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

// Pages
import Home from "./pages/home";

// Components
import Nav from "./components/nav";
import Record from "./pages/transcribe/record";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transcribe/record" element={<Record />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
