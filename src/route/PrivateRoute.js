import { Navigate } from "react-router-dom";

const PrivateRoute = ({ user, children }) => {
  console.log("user?", user);
  return user ? children : <Navigate to="/login" />;
};

//user값이 있으면 Todopage : redirect/login

export default PrivateRoute;
