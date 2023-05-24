import { Navigate, Outlet } from "react-router-dom";

const RequireAuth = (): JSX.Element => {
  if (sessionStorage.logged !== 'true') {
    return <Navigate to='/login' />;
  }

  return <Outlet />
}

export default RequireAuth
