import { Suspense } from "react";
import { Navigate } from "react-router-dom";
import '../../main.css'

interface FullScreenProps {
  children: React.ReactNode
}

const LoggedOut = ({ children }: FullScreenProps) => {
  if (sessionStorage.logged === 'true') {
    return <Navigate to='/' />;
  }
  
  return (
    <Suspense fallback={<span>carregando</span>}>
      <div className='content'>{children}</div>
    </Suspense>
  )
}

export default LoggedOut
