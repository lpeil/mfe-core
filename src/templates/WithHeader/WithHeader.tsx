import { Suspense } from 'react'
import { Header } from '../../components'
import '../../main.css'

interface WithMenuProps {
  children: React.ReactNode
}

const WithMenu = ({ children }: WithMenuProps) => (
  <div className="template-menu">
    <Header />
    <Suspense fallback={<span>carregando</span>}>
      <div className='content'>{children}</div>
    </Suspense>
  </div>
)

export default WithMenu
