import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

// Pages
import Home from "./pages/home";
import Text from "./pages/transcribe/text";
import Audio from "./pages/transcribe/audio";
import Record from "./pages/transcribe/record";
import Document from "./pages/transcribe/document";
import TranslateText from "./pages/translate/text";
import TranslateAudio from "./pages/translate/audio";
import TranslateRecord from "./pages/translate/record";

// Components
import Nav from "./components/nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Transcribe */}
        <Route path="/transcribe/text" element={<Text />} />
        <Route path="/transcribe/audio" element={<Audio />} />
        <Route path="/transcribe/record" element={<Record />} />
        <Route path="/transcribe/document" element={<Document />} />

        {/* Translate */}
        <Route path="/translate/text" element={<TranslateText />} />
        <Route path="/translate/audio" element={<TranslateAudio />} />
        <Route path="/translate/record" element={<TranslateRecord />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
