import React, { useRef, createRef, useEffect } from "react";
import TransitionLink from 'gatsby-plugin-transition-link';
import gsap from "gsap";
import { SplitText } from "../components/SplitText";

function ModalContent(props) {
  const contentRef = createRef();
  const mItems = createRef();
  const tl = useRef();

  useEffect(() => {

    if (typeof document !== 'undefined') {

    var tlx = gsap.timeline({delay: 0.2}), 
    mySplitText = new SplitText("#menu-items", {type:"words,chars"}), 
    chars = mySplitText.chars; //an array of all the divs that wrap each character

    tlx.from(chars, {duration: 0.5, y:180, transformOrigin:"0% 50% -50", ease:"out", stagger: 0.01}, "+=0");

  }

  }, []);

  return (
    <div ref={mItems} id="menu-items" className="content menu-content-items m-auto text-left ml-40">
      
    <p className="text-white list-none text-6xl md:text-6xl lg:text-8xl font-thin relative overflow-hidden uppercase transform phrase hover:text-yellow-700"><TransitionLink
              to="/about"
              exit={{
                length: 2,
                delay: 1.6
              }}
              entry={{ length: 1, delay: 0 }}
              className=""
              activeClassName=""
            >
              Sample 1
            </TransitionLink>
            </p>

            <p className="text-white list-none text-6xl md:text-6xl lg:text-8xl font-thin relative overflow-hidden uppercase transform phrase hover:text-purple-700"><TransitionLink
              to="/contact"
              exit={{
                length: 2,
                delay: 1.6
              }}
              entry={{ length: 1, delay: 0 }}
              className=""
              activeClassName=""
            >
              Sample 2
            </TransitionLink>
            </p>

            <p className="text-white list-none text-6xl md:text-6xl lg:text-8xl font-thin relative overflow-hidden uppercase transform phrase hover:text-blue-700"><TransitionLink
              to="/next"
              exit={{
                length: 2,
                delay: 1.6
              }}
              entry={{ length: 1, delay: 0 }}
              className=""
              activeClassName=""
            >
              Sample 3
            </TransitionLink>
            </p>


            <p className="text-white list-none text-6xl md:text-6xl lg:text-8xl font-thin relative overflow-hidden uppercase transform phrase hover:text-green-700"><TransitionLink
              to="/last"
              exit={{
                length: 2,
                delay: 1.6
              }}
              entry={{ length: 1, delay: 0 }}
              className=""
              activeClassName=""
            >
              Sample 4
            </TransitionLink>
            </p>
            
            <p className="text-white list-none text-6xl md:text-6xl lg:text-8xl font-thin relative overflow-hidden uppercase transform phrase hover:text-pink-700"><TransitionLink
              to="/lastone"
              exit={{
                length: 2,
                delay: 1.6
              }}
              entry={{ length: 1, delay: 0 }}
              className=""
              activeClassName=""
            >
              Sample 5
            </TransitionLink>
            </p>

        
        <p className="text-opacity-70 text-white list-none text-6xl md:text-6xl lg:text-2xl font-thin relative overflow-hidden uppercase transform phrase hover:text-pink-700">Close</p>
    </div>
  );
}

export default ModalContent;
