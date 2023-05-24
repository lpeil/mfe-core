import { lazy } from 'react';
import { WithHeader } from '../templates'

const HomeApp = lazy(() => import('home/App'));

const Home = () => {
  return (
    <WithHeader>
      <HomeApp />
    </WithHeader>
  )
}

export default Home
