import { Routes, Route } from "react-router";

import paths from "./paths";
import { PrivateRoute } from "./PrivateRoute";
import HomeScreen from "../screens/user/Home";
import LoginScreen from "../screens/auth/Login";

const AppRouter = () => {
  return (
    <Routes>
      <Route exact={true} path={paths.LOGIN_PATH} element={<LoginScreen />} />
      <Route exact={true} path={paths.HOME_PATH} element={<PrivateRoute component={HomeScreen} />} />
    </Routes>
  )
}

export default AppRouter;