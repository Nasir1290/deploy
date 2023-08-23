import { Route, Routes } from "react-router-dom";
import "./App.css";
import Body from "./Components/Body";
import Form from "./Components/Form";
import Header from "./Components/Header";
import Home from "./Components/Home";

function App() {

  return (
    <>
      <Body>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}/>
          <Route path="/services" element={<Form></Form>}/>
        </Routes>
      </Body>
    </>
  );
}

export default App;
