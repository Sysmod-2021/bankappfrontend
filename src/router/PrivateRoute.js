import { Navigate } from 'react-router-dom'

import useReadLocalStorage from '../hooks/useReadLocalStorage'


export const PrivateRoute = ({ component: RouteComponent }) => {
  const isLoggedIn = useReadLocalStorage('isLoggedIn')

  if (isLoggedIn) {
    return <RouteComponent />
  }

  return <Navigate to="/login" />
}