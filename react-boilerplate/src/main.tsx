import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../index.css';
import Home from './containers/Home/span';
import NavBar from './containers/Home/NavBar';
import HomeMenu from './containers/Home/HomeMenu';


const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
    <NavBar />
    <HomeMenu />
  </StrictMode>,
);
