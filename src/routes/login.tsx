import { lazy } from 'react';
import { LoggedOut } from '../templates'

const LoginApp = lazy(() => import('login/App'));

const Login = () => (
  <LoggedOut>
    <LoginApp />
  </LoggedOut>
)

export default Login
