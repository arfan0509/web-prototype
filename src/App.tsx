import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import ApiForm from "./pages/Apifrom";
import Register from "./pages/Register";
import UserProfile from "./pages/Userprofile"; // Halaman lain

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ApiForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user-profile" element={<UserProfile />} />
        {/* Rute lainnya */}
      </Routes>
    </Router>
  );
};

export default App;
