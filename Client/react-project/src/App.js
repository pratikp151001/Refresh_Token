import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Page2 from "./components/Page2";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
import ModalComponent from "./components/ModalComponent/Modal";
import NavigationBar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<ModalComponent />}></Route>
          {/* <Route element={<ProtectedRoutes />}> */}
            <Route path="/page2" element={<Page2 />}></Route>
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
