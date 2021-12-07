import { Routes, Route } from "react-router";

import paths from "./paths";
import LoginScreen from "../screens/auth/Login";
import HomeScreen from "../screens/user/Home";

const AppRouter = () => {
  return (
    <Routes>
      <Route exact={true} path={paths.HOME_PATH} element={<HomeScreen />} />
      <Route exact={true} path={paths.LOGIN_PATH} element={<LoginScreen />} />
      {/* <Route
        path="dashboard"
        element={<PrivateRoute roles={[ROLE.ADMIN]} component={Dashboard} />}
      /> */}
    </Routes>
  )
}

export default AppRouter;