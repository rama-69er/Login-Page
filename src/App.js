import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

import BasicForm from "./components/forms/basicForm";
import Dashboard from "./components/dashboard/dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BasicForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
