import React, { useRef, createRef, useEffect } from "react";
import TransitionLink from 'gatsby-plugin-transition-link';
import gsap from "gsap";
import { SplitText } from "../components/SplitText";
import CloseButton from "../images/CloseButton.inline.svg";
import { StaticImage } from "gatsby-plugin-image";

function ModalContent(props) {
  const contentRef = createRef();
  const mItems = createRef();
  const tl = useRef();

  useEffect(() => {

    if (typeof document !== 'undefined') {

    var tlx = gsap.timeline({delay: 0.3}), 
    mySplitText = new SplitText("#menu-items", {type:"words,chars"}), 
    chars = mySplitText.words; //an array of all the divs that wrap each character

    tlx.from(chars, {duration: 1, y:180, transformOrigin:"0% 50% -50", ease:"out", stagger: 0.01}, "+=0");

  }

  }, []);

  return (
    <div ref={mItems} id="menu-items" className="content menu-content-items m-auto text-left ml-40">
    <StaticImage src="../images/CloseButton.inline.svg" className="closeButton" />
    <p className="mb-2 text-gray-500 list-none text-1xl md:text-1xl lg:text-1xl font-thin relative overflow-hidden uppercase transform phrase mt-12">Projects</p>
    <p className="text-white list-none text-6xl md:text-6xl lg:text-6xl font-thin relative overflow-hidden uppercase transform phrase hover:text-yellow-700"><TransitionLink
              to="/about"
              exit={{
                length: 2,
                delay: 1.4
              }}
              entry={{ length: 1, delay: 0 }}
              className=""
              activeClassName=""
            >
              Mezzanotte
            </TransitionLink>
            </p>

            {/* <p className="text-white list-none text-6xl md:text-6xl lg:text-6xl font-thin relative overflow-hidden uppercase transform phrase hover:text-purple-700"><TransitionLink
              to="/contact"
              exit={{
                length: 2,
                delay: 1.4
              }}
              entry={{ length: 1, delay: 0 }}
              className=""
              activeClassName=""
            >
              Botanical
            </TransitionLink>
            </p> */}

            <p className="text-white list-none text-6xl md:text-6xl lg:text-6xl font-thin relative overflow-hidden uppercase transform phrase hover:text-blue-700"><TransitionLink
              to="/next"
              exit={{
                length: 2,
                delay: 1.4
              }}
              entry={{ length: 1, delay: 0 }}
              className=""
              activeClassName=""
            >
              Skin Care
            </TransitionLink>
            </p>


            <p className="text-white list-none text-6xl md:text-6xl lg:text-6xl font-thin relative overflow-hidden uppercase transform phrase hover:text-green-700"><TransitionLink
              to="/last"
              exit={{
                length: 2,
                delay: 1.4
              }}
              entry={{ length: 1, delay: 0 }}
              className=""
              activeClassName=""
            >
              Sikka
            </TransitionLink>
            </p>
          

            <p className="text-white list-none text-6xl md:text-6xl lg:text-6xl font-thin relative overflow-hidden uppercase transform phrase hover:text-pink-700"><TransitionLink
              to="/chaps"
              exit={{
                length: 2,
                delay: 1.4
              }}
              entry={{ length: 1, delay: 0 }}
              className=""
              activeClassName=""
            >
              Chaps &amp; Co
            </TransitionLink>
            </p>



            <p className="text-white list-none text-6xl md:text-6xl lg:text-6xl font-thin relative overflow-hidden uppercase transform phrase hover:text-pink-700"><TransitionLink
              to="/lastone"
              exit={{
                length: 2,
                delay: 1.4
              }}
              entry={{ length: 1, delay: 0 }}
              className=""
              activeClassName=""
            >
              Etihad Airlines
            </TransitionLink>
            </p>


            <p className="text-white list-none text-6xl md:text-6xl lg:text-6xl font-thin relative overflow-hidden uppercase transform phrase hover:text-pink-700"><TransitionLink
              to="/masti"
              exit={{
                length: 2,
                delay: 1.4
              }}
              entry={{ length: 1, delay: 0 }}
              className=""
              activeClassName=""
            >
              Masti
            </TransitionLink>
            </p>

        
        <p className="text-opacity-70 text-white list-none text-6xl md:text-6xl lg:text-2xl font-thin relative overflow-hidden uppercase transform phrase hover:text-pink-700">About</p>
        <p className="text-opacity-70 text-white list-none text-6xl md:text-6xl lg:text-2xl font-thin relative overflow-hidden uppercase transform phrase hover:text-pink-700">Resume</p>
    </div>
  );
}

export default ModalContent;
