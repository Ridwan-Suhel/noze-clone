import "./App.css";
import { Route, Routes } from "react-router-dom";
import Overview from "./pages/Overview/Overview";
import Contact from "./pages/Contact/Contact";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
