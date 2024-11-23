import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './pages/Login.jsx';
import Apply from './pages/Apply.jsx';
import Privacy from './pages/DataPrivacyNotice.jsx';
import Create from './pages/Create.jsx';
import Studentdb from './pages/Studentdb.jsx';
import Profile from './StudentdbPages/Profile.jsx';
import Courses from "./StudentdbPages/Courses.jsx";
import Enroll from "./StudentdbPages/Enroll.jsx";
import Home from "./StudentdbPages/Home.jsx";
import Notifications from "./StudentdbPages/Notifications.jsx";
import Settings from "./StudentdbPages/Settings.jsx";
import CreateApplication from "./pages/CreateApplication.jsx";
import Register from './pages/Register.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/apply",
    element: <Apply />,
  },
  {
    path: "/privacy",
    element: <Privacy />,
  },
  {
    path: "/create",
    element: <Create />,
  },
  {
    path: "/CreateApplication",
    element: <CreateApplication />,
  },

  {
    path: "/studentdb",
    element: <Studentdb />,
    children: [
      {
        index: true, // Default route for /studentdb
        path: "home",
        element: <Home />, // Render the Home component by default
      },
      {
        path: "profile",
        element: <Profile />, // Component to render when /studentdb/courses is visited
      },
      {
        path: "courses",
        element: <Courses />, // Component to render when /studentdb/courses is visited
      },
      {
        path: "enroll",
        element: <Enroll />, // Component to render when /studentdb/courses is visited
      },
      {
        path: "notifications",
        element: <Notifications />, // Component for /studentdb/notifications
      },
      {
        path: "settings",
        element: <Settings />, // Component for /studentdb/settings
      },
    ],
  },
]);

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
  