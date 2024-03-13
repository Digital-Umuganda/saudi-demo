import { Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";
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
import TranslateDocument from "./pages/translate/document";

// Components
import Nav from "./components/nav";

//Globals
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Text-To-Speech */}
        <Route path="/tts/text" element={<Text />} />
        <Route path="/tts/document" element={<Document />} />

        {/* Speech-To-Text */}
        <Route path="/stt/audio" element={<Audio />} />
        <Route path="/stt/record" element={<Record />} />

        {/* Translate */}
        <Route path="/translate/text" element={<TranslateText />} />
        <Route path="/translate/audio" element={<TranslateAudio />} />
        <Route path="/translate/record" element={<TranslateRecord />} />
        <Route path="/translate/document" element={<TranslateDocument />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
