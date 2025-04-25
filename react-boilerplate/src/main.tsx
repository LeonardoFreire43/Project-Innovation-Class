import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../index.css';
import Home from './containers/Home/span';
import NavBar from './containers/Home/NavBar';
import HomeMenu from './containers/Home/HomeMenu';
import Banner from './containers/Home/Banner';
import './containers/Home/Container';
import Carrossel from './containers/Home/Carrossel';
import Container from './containers/Home/Container';
import Container2 from './containers/Home/Container2';
import Container3 from './containers/Home/Container3';
import Carrossel2 from './containers/Home/Carrossel2';
import Contato from './containers/Home/Contato';
import { Newsletter } from './containers/Home/Newsletter';
import { Rodape } from './containers/Home/Rodape';

const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
    <NavBar />
    <HomeMenu />
    <Banner />
    <Carrossel />
    <Container />
    <Container2 />
    <Container3 />
    <Carrossel2 />
    <Contato />
    <Newsletter /> 
    <Rodape />
  </StrictMode>,
);