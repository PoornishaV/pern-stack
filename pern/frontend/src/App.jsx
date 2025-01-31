import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AgentManagement from "./pages/AgentManagement";
import UploadTasks from "./pages/UploadTasks";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/agent-management" element={<AgentManagement />} />
        <Route path="/upload-tasks" element={<UploadTasks />} />
      </Routes>
    </Router>
  );
}

export default App;
