import { useContext } from 'react-redux'
import { Navigate } from 'react-router-dom'
import AccessDenied from './pages/AccessDenied'
import { selectCurrentUser, selectIsAuthenticated } from './features/auth/authSlice'


export const PrivateRoute = ({ component: RouteComponent, roles }) => {
  const user = useContext(selectCurrentUser)
  const isAuthenticated = useContext(selectIsAuthenticated)
  const userHasRequiredRole = user && roles.includes(user.role) ? true : false

  if (isAuthenticated && userHasRequiredRole) {
    return <RouteComponent />
  }

  if (isAuthenticated && !userHasRequiredRole) {
    return <AccessDenied />
  }

  return <Navigate to="/login" />
}