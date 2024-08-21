import { Dashboard } from "./modules/pages/dashboardPage/dashboard.js";
import "./App.css";
import Login from "./modules/pages/loginPage/Login.js";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { EditBoardPage } from './modules/pages/editBoardPage/editBoardPage.js';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/editBoard/:id" element={<EditBoardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
