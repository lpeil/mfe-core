import { lazy } from 'react';
import { WithHeader } from '../templates'

const PixApp = lazy(() => import('pix/App'));

const Pix = () => {
  return (
    <WithHeader>
      <PixApp />
    </WithHeader>
  )
}

export default Pix
