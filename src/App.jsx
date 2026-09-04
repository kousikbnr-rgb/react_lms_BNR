import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile"
import Course from "./pages/Course"
import MCQ from "./pages/MCQ";

function App() {
  return (
    <BrowserRouter>
      <Routes>
       
        <Route
          path="/"
          element={<h1>BNR LMS Home</h1>}
        />

        <Route
          path="/course"
          element={<Course/>}
        />

        <Route
          path="/login"
          element={<Login/>}
        />


        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

         <Route
          path="/profile"
          element={<Profile/>}
        />

        <Route path="/mcq/:course" element={<MCQ />} />



      </Routes>
    </BrowserRouter>
  );
}

export default App;