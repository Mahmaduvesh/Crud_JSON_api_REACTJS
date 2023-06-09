import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmpListing from "./EmpListing";
import EmpCreate from "./EmpCreate";
import EmpEdit from "./EmpEdit";
import EmpDetail from "./EmpDetail";
function App() {
  return (
    <div className="App">
      <h1>Crud Operation In ReactJS</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmpListing />} />
          <Route path="/employee/create" element={<EmpCreate />} />
          <Route path="/employee/edit/:empid" element={<EmpEdit />} />
          <Route path="/employee/detail/:empid" element={<EmpDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
