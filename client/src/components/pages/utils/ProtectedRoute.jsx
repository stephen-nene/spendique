import { useSelector } from "react-redux";
import Unauthorised from "./Unauthorised";
import NotLoggedIn from "./NotLoggedIn";
import NotActivate from "./NotActivate";
import Suspended from "./Suspended";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const userData = useSelector((state) => state.user.userData);
  const darkMode = useSelector((state) => state.app.darkMode);

  if (!userData || !Object.keys(userData).length) {
    return <NotLoggedIn darkMode={darkMode} />;
  }

  if (userData.status === "inactive") {
    return <NotActivate user={userData} darkMode={darkMode} />;
  }
  // if (userData.status === "suspended") {
  //   return <Suspended darkMode={darkMode} />;
  // }

  if (
    allowedRoles &&
    allowedRoles.length > 0 &&
    !allowedRoles?.includes(userData.role)
  ) {
    return <Unauthorised darkMode={darkMode} />;
  }

  return children;
};

export default ProtectedRoute;
