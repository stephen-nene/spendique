// App.js
import React, { Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Navbar } from "../Navbar";
import Footer from "../Footer";
import ProtectedRoute from "../pages/utils/ProtectedRoute";
import { getCurrentUser } from "../../helpers/auth";
import { routeConfig, LoadingFallback } from "./routes";
import "../../assets/styles/App.css";

function App() {
  const darkMode = useSelector((state) => state.app.darkMode);
  const userData = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userData) {
      getCurrentUser(dispatch);
    }
  }, [dispatch, userData]);

  const renderRoute = (route) => {
    const RouteComponent = route.element;

    if (route.protected) {
      return (
        <Route
          key={route.path}
          path={route.path}
          element={
            <ProtectedRoute
              allowedRoles={route.roles || []}
              allowPendingAccess={route.allowPendingAccess}
            >
              <Suspense fallback={<LoadingFallback />}>
                <RouteComponent />
              </Suspense>
            </ProtectedRoute>
          }
        />
      );
    }

    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          <Suspense fallback={<LoadingFallback />}>
            <RouteComponent />
          </Suspense>
        }
      />
    );
  };

  return (
    <div className={`${darkMode ? "dark" : ""} flex flex-col`}>
      <Navbar />
      <div className="bg-[#fbeeffd2] dark:bg-gray-800 dark:text-white min-h-screen pt-20 md:pt-[100px] mt-20">
        <Routes>{routeConfig.map(renderRoute)}</Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
