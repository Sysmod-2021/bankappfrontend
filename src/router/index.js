import { Routes, Route } from "react-router";

import paths from "./paths";
import LoginScreen from "../screens/auth/Login";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={paths.LOGIN_PATH} element={<LoginScreen />} />
      {/* <Route
        path="dashboard"
        element={<PrivateRoute roles={[ROLE.ADMIN]} component={Dashboard} />}
      /> */}
    </Routes>
  )
}

export default AppRouter;