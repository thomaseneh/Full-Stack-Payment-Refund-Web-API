import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter } from "react-router-dom";
import Home from "./components/home/Home.jsx";
import { PageNotFound } from "./components/notFoundPage/PageNotFound.jsx";
import AboutUs from "./components/about/AboutUs.jsx";
import Login from "./components/login/Login.jsx";
import ContactUs from "./components/contact/ContactUs.jsx";
import UnderConstruction from "./components/underConstruction/UnderConstruction.jsx";
import { PasswordResset } from "./components/login/forgetPassword/ResetPassword.jsx";
import SignUp from "./components/signup/SignUp.jsx";


export const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <PageNotFound /> },
  { path: "/about", element: <AboutUs /> },
  { path: "/login", element: <Login /> },
  { path: "/contact", element: <ContactUs /> },
  { path: "/underConstruction", element: <UnderConstruction /> },
  { path: "/passwordreset", element: <PasswordResset /> },
  { path: "/signup", element: <SignUp />}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
