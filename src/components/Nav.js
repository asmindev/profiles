import React, { useEffect, useState } from 'react';
import { MenuAlt1Icon, XIcon } from '@heroicons/react/outline';
import Fade from 'react-reveal/Fade';

export default function Nav() {
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const urls = [
    { name: 'Home', url: '#home', id: 1 },
    { name: 'About', url: '#about', id: 2 },
    { name: 'Skill', url: '#skill', id: 3 },
    { name: 'Projects', url: '#projects', id: 4 },
    { name: 'Contact', url: '#contact', id: 5 },
  ];
  const onClick = () => {
    setIsOpen(!isOpen);
    setIsActive(!isActive);
    window.removeEventListener('scroll');
  };
  const onScroll = () => {
    setScrollY(window.scrollY); // get the current scroll position
  };
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    if (scrollY > 100) {
      setIsActive(true);
    } else if (!isOpen) {
      setIsActive(false);
    }
    // return () => {
    //   window.removeEventListener('scroll')
    // }
  }, [scrollY, isOpen]);
  return (
    <nav
      className={`${
        isActive ? 'bg-white/20 backdrop-blur-lg' : 'bg-white/0'
      } smooth px-4 py-3 fixed z-50 top-0 w-full overflow-hidden`}
    >
      <div className="container mx-auto relative lg:w-10/12">
        <div className="flex justify-between items-center flex-col lg:flex-row">
          <div className="flex items-center justify-between w-full lg:w-max">
            <button
              onClick={onClick}
              type="button"
              className="relative text-white w-8 h-8 text-4xl lg:hidden outline-none"
            >
              <MenuAlt1Icon
                className={`${
                  isOpen ? 'opacity-0 rotate-90' : 'delay-100 opacity-100'
                } absolute top-0 transition-all duration-200`}
              />
              <XIcon
                className={`${
                  isOpen ? 'delay-100 opacity-100' : 'opacity-0 rotate-90'
                } absolute top-0 transition-all duration-200`}
              />
            </button>
            <h1 className="text-center text-3xl font-bold">Asmin</h1>
          </div>
        </div>
        <div
          className={`${
            isOpen ? 'h-[100vh] opacity-100' : 'h-0 opacity-0 overflow-hidden'
          } transition-all duration-200s`}
        >
          <div className="w-full h-full flex justify-center items-center flex-col">
            {urls.map((url) => (
              <Fade key={url.id} right when={isOpen}>
                <a
                  onClick={() => setIsOpen(!isOpen)}
                  className="py-4 text-center w-full hover:bg-white hover:text-gray-800 smooth"
                  href={url.url}
                >
                  {url.name}
                </a>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
