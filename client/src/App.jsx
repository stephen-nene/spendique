import React, { lazy, Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Component Imports
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";

import { Home } from "./pages/Home";
import { Profiles } from "./pages/Profiles";
import Finances from "./pages/Finances";
import About from "./pages/About";
import ProtectedRoute from "./pages/utils/ProtectedRoute";
import Error404 from "./pages/utils/Error404";

import { getCurrentUser } from "./helpers/auth";

const DashboardRoutes = {
  Home: lazy(() => import("./pages/dashboard/HomeDash")),
  Meetings: lazy(() => import("./pages/dashboard/Meetings")),
  Scholarships: lazy(() => import("./pages/dashboard/Scholarships")),
  Users: lazy(() => import("./pages/dashboard/Users")),
};

const AuthRoutes = {
  Login: lazy(() => import("./pages/auth/Login")),
  Forgot: lazy(() => import("./pages/auth/Forgot")),
  Register: lazy(() => import("./pages/auth/Register")),
  Activate: lazy(() => import("./pages/auth/Activate")),
  Reset: lazy(() => import("./pages/auth/Reset")),
};

import "./assets/styles/App.css";

// Fallback Loading Component
const LoadingFallback = () => (
  <div class="w-full max-w-md mx-auto animate-pulse p-9">
    <h1 class="h-2 bg-gray-300 rounded-lg w-52 dark:bg-gray-600"></h1>

    <p class="w-48 h-2 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
    <p class="w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
    <p class="w-64 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
    <p class="w-4/5 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
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
          className={`${
            darkMode ? "bg-sky-950" : ""
          } min-h-screen pt-[63px] md:mt-[5px] `}
        >
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home darkMode={darkMode} />} />
              <Route
                path="/login"
                element={<AuthRoutes.Login darkMode={darkMode} />}
              />
              <Route path="/register" element={<AuthRoutes.Register />} />
              <Route path="/forgot-password" element={<AuthRoutes.Forgot />} />
              <Route path="/activate" element={<AuthRoutes.Activate />} />
              <Route path="/reset-password" element={<AuthRoutes.Reset />} />

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
              <Route path="/dashboard">
                <Route
                  index
                  element={renderProtectedRoute([], DashboardRoutes.Home)}
                />
                <Route
                  path="meetings"
                  element={renderProtectedRoute(
                    ["admin"],
                    DashboardRoutes.Meetings
                  )}
                />
                <Route
                  path="scholarships"
                  element={renderProtectedRoute(
                    ["admin"],
                    DashboardRoutes.Scholarships
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
