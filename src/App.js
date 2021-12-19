import '../src/styles/app.less';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import greenbackground from "../src/assets/greenbackground.jpeg";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <img src={greenbackground} alt="backgrn" />
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage/>} exact />
        <Route path="*" element={<Homepage/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
