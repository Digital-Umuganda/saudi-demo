import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

// Pages
import Home from "./pages/home";
import Audio from "./pages/transcribe/audio";
import Record from "./pages/transcribe/record";

// Components
import Nav from "./components/nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transcribe/record" element={<Record />} />
        <Route path="/transcribe/audio" element={<Audio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
