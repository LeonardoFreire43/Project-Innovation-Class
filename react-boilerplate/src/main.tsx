import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './containers/Home/span';
import NavBar from './containers/Home/NavBar';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home/>
    <NavBar/>
  </StrictMode>,
)
