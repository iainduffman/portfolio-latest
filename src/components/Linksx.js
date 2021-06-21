import React from 'react';
import Cursor from '../components/Cursor';
import TransitionLink from 'gatsby-plugin-transition-link';
import gsap from 'gsap';
import { SplitText } from "../components/SplitText";

export const Menu = () => {

  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked!!!!');
    gsap.to(".menuContainer", {width: 0, duration: 0.5});
    gsap.to(".overlay", {opacity: '0', duration: 0.3});
    gsap.to("#menu-items", {opacity: '0', duration: 0.2});
    gsap.to(".menuContents", {opacity: '0', duration: 0.3});
    gsap.set(".menuContainer", {opacity: '0', delay: 0.6});
    gsap.set(".menuContainer", {zIndex: '999'});
    gsap.set("#menu-items .phrase", {opacity: '0', delay: 0, delay: 1});
  }

  
  function handleClickOpen(e) {
    e.preventDefault();
    console.log('The link was clicked!!!!');
    gsap.set(".menuContainer", {opacity: '1'});
    gsap.set("#menu-items", {opacity: '1'});
    gsap.to(".menuContainer", {width: '100%', duration: 0.8});
    gsap.to(".overlay", {opacity: '0.8', duration: 0.3});
    gsap.to(".menuContents", {opacity: '0.8', duration: 0.3});
    gsap.set(".menuContainer", {zIndex: '99999'});
    gsap.set("#menu-items .phrase", {opacity: '1', delay: 0.4});
    tl8.from(chars, {duration: 0.8, y:180, transformOrigin:"0% 50% -50",  ease:"out", stagger: 0.01, delay: 0.1}, "+=0");
  }

  var tl8 = gsap.timeline({delay: 0.5}), 
  mySplitText = new SplitText("#menu-items", {type:"words,chars"}), 
  chars = mySplitText.chars; //an array of all the divs that wrap each character

gsap.set("#menu-items", {perspective: 400});


  return (
    <>

      <div id="menuWrapper" className="menuContainer">
      <Cursor />
      <div className="menuContents" className="flex h-screen">
        <span className="text-white close" onClick={handleClick}></span>

        <div id="menu-items" className="m-auto text-left ml-40">
        <p className="text-white list-none text-6xl md:text-6xl lg:text-8xl font-thin relative overflow-hidden uppercase transform phrase hover:text-yellow-700">Bio</p>
        <p className="text-white list-none text-6xl md:text-6xl lg:text-8xl font-thin relative overflow-hidden uppercase transform phrase hover:text-red-700">Case Studies</p>
        <p className="text-white list-none text-6xl md:text-6xl lg:text-8xl font-thin relative overflow-hidden uppercase transform phrase hover:text-blue-700">Resume</p>
        <p className="text-white list-none text-6xl md:text-6xl lg:text-8xl font-thin relative overflow-hidden uppercase transform phrase hover:text-green-700">Contact</p>
        <p onClick={handleClick} className="text-opacity-70 text-white list-none text-6xl md:text-6xl lg:text-2xl font-thin relative overflow-hidden uppercase transform phrase hover:text-pink-700">Close</p>
        </div>
      </div>
      </div>

      <div className="flex mb-20 justify-between menu">
      <div className="mr-8 text-md uppercase">
            <a href="#" onClick={handleClickOpen}>
              Open Menu
            </a>
          </div>


        <div className="mr-8 text-xl">
          <TransitionLink
            to="/"
            exit={{
              length: 2,
            }}
            entry={{ length: 1 }}
            className="hover:text-gray-600"
          >
            Logo Placehold
          </TransitionLink>
        </div>
        <div className="flex">
          <div className="mr-8 text-md uppercase">
            <TransitionLink
              to="/about"
              exit={{
                length: 2,
              }}
              entry={{ length: 1 }}
              className="hover:text-gray-600"
              activeClassName="border-b-2 border-gray-600"
            >
              Onee
            </TransitionLink>
          </div>
          <div className="mr-8 text-md uppercase">
            <TransitionLink
              to="/contact"
              exit={{
                length: 2,
              }}
              entry={{}}
              className="hover:text-gray-600"
              activeClassName="border-b-2 border-gray-600"
            >
              Two
            </TransitionLink>
          </div>
          <div className="mr-8 text-md uppercase">
            <TransitionLink
              to="/next"
              exit={{
                length: 2,
              }}
              entry={{}}
              className="hover:text-gray-600"
              activeClassName="border-b-2 border-gray-600"
            >
              Three
            </TransitionLink>
          </div>
          <div className="mr-8 text-md uppercase">
            <TransitionLink
              to="/last"
              exit={{
                length: 2,
              }}
              entry={{}}
              className="hover:text-gray-600"
              activeClassName="border-b-2 border-gray-600"
            >
              Five
            </TransitionLink>
          </div>
          <div className="mr-8 text-md uppercase">
            <TransitionLink
            rel="prefetch"
              to="/lastone"
              exit={{
                length: 2,
              }}
              entry={{}}
              className="hover:text-gray-600"
              activeClassName="border-b-2 border-gray-600"
            >
              Six
            </TransitionLink>
          </div>
        </div>
      </div>
    </>
  );
};