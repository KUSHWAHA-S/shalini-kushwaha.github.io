// import { useEffect } from 'react';

import './App.css';
import Project from './components/Project';
import Experience from './components/Experience';
import Header from './components/Header';
import Skills from './components/Skills';
import NavBar from './components/NavBar';
import Education from './components/Education';
// import './styles/InfiniteLoop.css';

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Header />
        <Skills />
        <Project />
        <Experience />
        <Education />
      </main>
      <footer>
        <h1>Let’s work together</h1>
        <p>
          If you need a modern and powerful website for your business, startup
          or yourself, I am available for work.
        </p>
      </footer>
    </>
  );
}

export default App;
// div1 height 300vh
// div sticky
