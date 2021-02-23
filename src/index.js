import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import Header from './Header';
import Hero from './Sections/Hero';
import About from './Sections/About';
import Facts from './Sections/Facts';
import Skills from './Sections/Skills';
import Resume from './Sections/Resume';
import Portfolio from './Sections/Portfolio';
import Services from './Sections/Services';
import Testimonials from './Sections/Testimonials';
// import Contact from './Sections/Contact';
import Footer from './Footer';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Hero />
    <main id="main">
      <About />
      <Facts />
      <Skills />
      <Resume />
      <Portfolio />
      <Services />
      <Testimonials />
    </main>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
