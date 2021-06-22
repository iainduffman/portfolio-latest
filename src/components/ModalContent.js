import React, { useRef, createRef, useEffect } from "react";
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

    tlx.from(chars, {duration: 0.8, y:180, transformOrigin:"0% 50% -50", ease:"out", stagger: 0.01}, "+=0");

  }

  }, []);

  return (
    <div ref={mItems} id="menu-items" className="content menu-content-items m-auto text-left ml-40">
        <p className="text-white list-none text-6xl md:text-6xl lg:text-8xl font-thin relative overflow-hidden uppercase transform phrase hover:text-yellow-700">Biographie</p>
        <p className="text-white list-none text-6xl md:text-6xl lg:text-8xl font-thin relative overflow-hidden uppercase transform phrase hover:text-red-700">Case Studies</p>
        <p className="text-white list-none text-6xl md:text-6xl lg:text-8xl font-thin relative overflow-hidden uppercase transform phrase hover:text-blue-700">Resume</p>
        <p className="text-white list-none text-6xl md:text-6xl lg:text-8xl font-thin relative overflow-hidden uppercase transform phrase hover:text-green-700">Contact</p>
        <p className="text-opacity-70 text-white list-none text-6xl md:text-6xl lg:text-2xl font-thin relative overflow-hidden uppercase transform phrase hover:text-pink-700">Close</p>
    </div>
  );
}

export default ModalContent;
