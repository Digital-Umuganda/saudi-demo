import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

// Pages
import Home from "./pages/home";

// Components
import Nav from "./components/nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
