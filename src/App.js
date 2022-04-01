import React, { useState } from 'react';
import { ViewGridIcon } from '@heroicons/react/outline';
import { ViewGridIcon as ViewGridIconSolid } from '@heroicons/react/solid';
import Home from './views/Home-Mo';
import About from './views/About';
import Skill from './views/Skill';
import Footer from './views/Footer';
// import ImageSlider from './views/ImageSlider';

function App() {
  const [isDark, setIsDark] = useState(false);
  const themeToggle = () => {
    const html = document.querySelector('html').classList;
    if (html.contains('dark')) {
      setIsDark(!isDark);
      html.remove('dark');
    } else {
      html.add('dark');
    }
  };
  return (
    <div className="w-full flex font-popins overflow-hidden">
      <div className="w-full">
        <button onClick={themeToggle} type="button" className="fixed z-50 m-4">
          {isDark ? (
            <ViewGridIconSolid className="w-7" />
          ) : (
            <ViewGridIcon className="w-7" />
          )}
        </button>
        <div className="px-4 lg:px-0">

          <div className="w-full h-screen">
            <Home />
          </div>
          <div id="about" className="w-full">
            <About />
          </div>
          <div id="skill" className="w-full mt-36">
            <Skill />
          </div>
          {/* <div id="footer" className="w-full mt-24">
          <ImageSlider />
        </div> */}
        </div>
        <div id="footer" className="w-full mt-24">
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default App;
