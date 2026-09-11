import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Course from "./pages/Course";
import MCQ from "./pages/MCQ";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminCourse from "./pages/admin/AdminCourse";
import AdminTrainer from "./pages/admin/AdminTrainer";
import AdminStudent from "./pages/admin/AdminStudent";
import AdminAllocate from "./pages/admin/AdminAllocate";
import TrainerLogin from "./pages/TrainerLogin";
import TrainerDashboard from "./pages/trainer/TrainerDashboard";
import TrainerLayout from "./components/TrainerLayout";
import Attendance from "./pages/trainer/Attendance";
import BatchReport from "./pages/trainer/BatchReport";
import StudentReport from "./pages/trainer/StudentReport";
import Students from "./pages/trainer/Students";
import Batches from "./pages/trainer/Batches";
import TrainerProfile from "./pages/trainer/TrainerProfile";

function App() {


  
//  return (
    // <div>
    //   <UserForm />

    //   <hr />

    //   <UserDetails />
    // </div>
  
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route
          path="/"
          element={<h1>BNR LMS Home</h1>}
        /> */}

        <Route path="/course" element={<Course />} />

        <Route path="/" element={<Login />} />
        <Route path="/" element={<h1>BNR LMS Home</h1>} />

        <Route path="/course" element={<Course />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/mcq/:course" element={<MCQ />} />

        {/*admin routes */}

        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/course" element={<AdminCourse />} />
        <Route path="/admin/trainer" element={<AdminTrainer />} />
        <Route path="/admin/student" element={<AdminStudent />} />
        <Route path="/admin/allocate" element={<AdminAllocate />} />

        {/*trainer routes */}

        <Route path="/trainer/login" element={<TrainerLogin />} />

        <Route path="/trainer/login" element={<TrainerLogin />} />

        <Route
          path="/trainer/dashboard"
          element={
            <TrainerLayout>
              <TrainerDashboard />
            </TrainerLayout>
          }
        />

        <Route
          path="/trainer/attendance"
          element={
            <TrainerLayout>
              <Attendance />
            </TrainerLayout>
          }
        />
        <Route
          path="/trainer/reports/batch"
          element={
            <TrainerLayout>
              <BatchReport />
            </TrainerLayout>
          }
        />
        <Route
          path="/trainer/reports/student"
          element={
            <TrainerLayout>
              <StudentReport />
            </TrainerLayout>
          }
        />
        <Route
          path="/trainer/students"
          element={
            <TrainerLayout>
              <Students />
            </TrainerLayout>
          }
        />

        <Route
          path="/trainer/batches"
          element={
            <TrainerLayout>
              <Batches />
            </TrainerLayout>
          }
        />

        <Route
          path="/trainer/profile"
          element={
            <TrainerLayout>
              <TrainerProfile />
            </TrainerLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}



export default App;
