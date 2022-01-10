import { useContext } from 'react';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Skills from './components/Skills/Skills';
import { ThemeContext } from './contexts/theme';

const App = () => {
  const [{ themeName }] = useContext(ThemeContext);

  const favicon = document.getElementById('favicon');

  if (themeName === 'dark') {
    favicon.href = `${process.env.PUBLIC_URL}/favicon_dark.ico`;
  } else if (themeName === 'light') {
    favicon.href = `${process.env.PUBLIC_URL}/favicon_light.ico`;
  }

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />

      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default App;
