import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Transition from "./Transition";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import UserProfile from "./pages/Userprofile";
import Encryption from "./pages/Encryption "; // Halaman lain

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Transition>
              <Home />
            </Transition>
          }
        />
        <Route
          path="/login"
          element={
            <Transition>
              <Login />
            </Transition>
          }
        />
        <Route
          path="/register"
          element={
            <Transition>
              <Register />
            </Transition>
          }
        />
        <Route
          path="/user-profile"
          element={
            <Transition>
              <UserProfile />
            </Transition>
          }
        />
        <Route
          path="/converter"
          element={
            <Transition>
              <Encryption />
            </Transition>
          }
        />
        {/* Rute lainnya */}
      </Routes>
    </Router>
  );
};

export default App;
