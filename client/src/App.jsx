import React, { lazy, Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Component Imports
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";

import { Home } from "./components/pages/Home";
import { Profiles } from "./components/pages/Profiles";
import Finances from "./components/pages/Finances";
import About from "./components/pages/About";
import ProtectedRoute from "./components/pages/utils/ProtectedRoute";
import Error404 from "./components/pages/utils/Error404";

import { getCurrentUser } from "./helpers/auth";

const DashboardRoutes = {
  Home: lazy(() => import("./components/pages/dashboard/HomeDash")),
  Scholarships: lazy(() => import("./components/pages/dashboard/Scholarships")),
  Users: lazy(() => import("./components/pages/dashboard/Users")),
  AllFinances: lazy(() => import("./components/pages/dashboard/AllFinances")),
  Categories: lazy(() => import("./components/pages/dashboard/Categories")),
};

const AuthRoutes = {
  Login: lazy(() => import("./components/pages/auth/Login")),
  Forgot: lazy(() => import("./components/pages/auth/Forgot")),
  Register: lazy(() => import("./components/pages/auth/Register")),
  Activate: lazy(() => import("./components/pages/auth/Activate")),
  Reset: lazy(() => import("./components/pages/auth/Reset")),
};

import "./assets/styles/App.css";

// Fallback Loading Component
const LoadingFallback = () => (
  <div className="w-full max-w-md mx-auto animate-pulse p-9">
    <h1 className="h-2 bg-gray-300 rounded-lg w-52 dark:bg-gray-600"></h1>

    <p className="w-48 h-2 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
    <p className="w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
    <p className="w-64 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
    <p className="w-4/5 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
  </div>
);

function App() {
  const darkMode = useSelector((state) => state.app.darkMode);
  const userData = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userData) {
      getCurrentUser(dispatch);
    }
  }, [dispatch, userData]);

  const renderProtectedRoute = (allowedRoles = [], Component) => (
    <ProtectedRoute allowedRoles={allowedRoles}>
      <Suspense fallback={<LoadingFallback />}>
        <Component />
      </Suspense>
    </ProtectedRoute>
  );

  return (
    <>
      <div className="flex flex-col ">
        <Navbar darkMode={darkMode} />
        <div
          className={`pt-[65px] md:pt-[75px]  ${darkMode ? "bg-sky-950" : ""} min-h-screen `}
        >
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home darkMode={darkMode} />} />
              <Route path="/login" element={<AuthRoutes.Login />} />
              <Route path="/register" element={<AuthRoutes.Register />} />
              <Route path="/forgot" element={<AuthRoutes.Forgot />} />
              <Route
                path="/activate/:token"
                element={<AuthRoutes.Activate />}
              />
              <Route path="/reset/:token" element={<AuthRoutes.Reset />} />

              <Route path="/about" element={<About />} />
              {/* Protected Routes */}
              <Route
                path="/profile"
                element={renderProtectedRoute([], Profiles)}
              />
              <Route
                path="/finances"
                element={renderProtectedRoute(["admin", "user"], Finances)}
              />

              {/* Dashboard Routes */}
              <Route path="/dash">
                <Route
                  index
                  element={renderProtectedRoute([], DashboardRoutes.Home)}
                />
                <Route
                  path="categories"
                  element={renderProtectedRoute(
                    ["admin"],
                    DashboardRoutes.Categories
                  )}
                />

                <Route
                  path="finances"
                  element={renderProtectedRoute(
                    ["admin"],
                    DashboardRoutes.AllFinances
                  )}
                />
                <Route
                  path="users"
                  element={renderProtectedRoute(
                    ["admin"],
                    DashboardRoutes.Users
                  )}
                />
              </Route>

              {/* 404 Route */}
              <Route path="*" element={<Error404 />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
