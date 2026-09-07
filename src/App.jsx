import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile"
import Course from "./pages/Course"
import MCQ from "./pages/MCQ";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminCourse from "./pages/admin/AdminCourse";
import AdminTrainer from "./pages/admin/AdminTrainer";
import AdminStudent from "./pages/admin/AdminStudent";
import AdminAllocate from "./pages/admin/AdminAllocate";
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
          element={<Course />}
        />

        <Route
          path="/login"
          element={<Login />}
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
          element={<Profile />}
        />

        <Route path="/mcq/:course" element={<MCQ />} />


        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/course" element={<AdminCourse />} />
        <Route path="/admin/trainer" element={<AdminTrainer />} />
        <Route path="/admin/student" element={<AdminStudent />} />
        <Route path="/admin/allocate" element={<AdminAllocate />} />





      </Routes>
    </BrowserRouter>
  );
}

export default App;
