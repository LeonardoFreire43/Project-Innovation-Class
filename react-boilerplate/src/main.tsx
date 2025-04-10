import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './containers/Home/span';
import NavBar from './containers/Home/NavBar';
import HomeMenu from './containers/Home/HomeMenu';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home/>
    <NavBar/>
    <HomeMenu/>
  </StrictMode>,
)
