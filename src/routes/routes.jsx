import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute.jsx";
import Profile from "../pages/Profile.jsx";
import Landing from "../pages/Auth.jsx";
import Layout from "../pages/Layout.jsx";
import OTP from "../components/OTP.jsx";
import Reset from "../components/Reset.jsx";
import Recovery from "../components/Recovery.jsx";
import About from "../pages/About.jsx";
import Home from "../pages/Home.jsx";
import Auth from "../pages/Auth.jsx";
import AuthForms from "../components/AuthForms.jsx";
import Resume from "../pages/Resume.jsx";
import Page1 from "../pages/Page1.jsx";
import Page2 from "../pages/Page2.jsx";
import Summery from "../pages/Summery.jsx";
import Page3 from "../pages/Page3.jsx";
import PDF from "../pages/PDF.jsx";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "resume/",
        element: <Resume />,
        children: [
          {
            path: "basic-info-and-skills",
            element: <Page1 />,
          }, {
            path: "education-and-experiences",
            element: <Page2 />,
          }, {
            path: "projects-and-interests",
            element: <Page3 />,
          },
          {
            path: "summary",
            element: <Summery />,
          },
          {
            path: "pdf",
            element: <PDF />,
          },

        ]
      },
      {
        path: "auth/",
        element: <Auth />,
        children: [
          {
            path: "",
            element: <AuthForms />,
          },

          {
            path: "account-recovery",
            element: <Recovery />,
          },
          {
            path: "reset-password",
            element: <Reset />,
          },
          {
            path: "verify-otp",
            element: <OTP />,
          },
          {
            path: "secure",
            element: (
              <ProtectedRoute pass={false}>
                <Profile />
              </ProtectedRoute>
            ),
          },
        ],
      },
    ],
  },
]);
