import Home from "./assets/component/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Add from "./assets/users/create";
import Edit from "./assets/users/edit";


function AlRoute() {
    return (
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Add />}></Route>
            <Route path="/edit" element={<Edit />}></Route>
          </Routes>
        </Router>
      </>
    );
  }
   
  export default AlRoute;