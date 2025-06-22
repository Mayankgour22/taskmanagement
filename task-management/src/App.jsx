import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Dashboard from "./pages/dashbord";
import CreateUser from "./pages/createUser";
import AssignTask from "./pages/assignTask";
import UserDashbord from "./pages/userDashbord";
import MyTask from "./pages/myTask";
import TaskDetailes from "./pages/TaskDetailes";
const app = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashbord" element={<Dashboard />} />
            <Route path="/createuser" element={<CreateUser />} />
            <Route path="/assigntask" element={<AssignTask />} />
            <Route path="/taskdetailes" element={<TaskDetailes />} />
          </Route>
        </Routes>
        <Routes>
          <Route path="userdashbord" element={<UserDashbord />}>
            <Route path="mytask" element={<MyTask />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default app;
