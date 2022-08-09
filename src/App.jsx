import { Router } from "react-router-dom";
import "./App.css";
import BuscaCep from "./components/BuscaCep";
import BuscaCep2 from "./components/BuscaCep2";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import Modal from "./components/Modal";

function App() {
  return (
    <>
        <Header />
        {/* <BuscaCep /> */}
        <Modal />
        <BuscaCep2 />
        <Form />
        <Footer />
    </>
  );
}

export default App;
