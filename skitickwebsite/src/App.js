import { Dashboard } from "./modules/dashboardPage/dashboard.js";
import "./App.css";
import Login from "./modules/loginPage/Login";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { EditBoardPage } from './modules/editBoardPage/editBoardPage.js';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/editBoard" element={<EditBoardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
