import React, { useEffect, useRef } from 'react';
import { Menu } from '../components/Menu';
import Cursor from '../components/Cursor';
import Helmet from 'react-helmet'
import gsap from 'gsap';
import { SplitText } from "../components/SplitText";
import { ScrollTrigger } from "../components/ScrollTrigger";
import { StaticImage } from "gatsby-plugin-image";

gsap.registerPlugin(ScrollTrigger);

const intTag = 'home';

const About = ({ transitionStatus }) => {
  let textRefs = useRef([]);
  const textfly = (textRefs, direction) => {
    let even = [];
    let odd = [];
    textRefs.forEach((idx, i) => {
      if (i % 2 === 0) {
        even.push(idx);
      } else {
        odd.push(idx);
      }
    });
    if (direction === 1) {


            // Set logo colour
            gsap.set(".title-home", { opacity: "1" });
            //


            gsap.to('.line', {
              duration: 0.6,
              delay: 1,
              ease: 'Power1.easeInOut',
              backgroundColor: 'rgb(41, 41, 41)'
            })

            gsap.to(".vidContainer", {
              duration: 0.6,
              delay: 3,
              ease: 'Power1.easeInOut',
              opacity: 0.15
            })

      gsap.from(even, {
        duration: 1,
        y: 100 * direction,
        opacity: 0,
        delay: 0.9,
        ease: 'power4.inOut',
        stagger: {
          amount: 0.4,
        },
      });


      gsap.from(odd, {
        duration: 1,
        y: 100 * direction,
        opacity: 0,
        delay: 1.04,
        ease: 'power4.inOut',
        stagger: {
          amount: 0.3,
        },
        

      });

      gsap.to(document.body, {
        duration: 0.6,
        delay: 1,
        ease: 'Power1.easeInOut',
        backgroundColor: '#000000'
      })

      gsap.to('progress', {
        value: 100,
        ease: 'none',
      
        scrollTrigger: { 
          trigger: "body",
          scrub: 0.5,
          markers: false,
          start: "top top",
        end: "bottom bottom",
      }
      });


      // Tween logo colour
      gsap.to("path#Combined-Shape", { fill: "#fff", delay: 1 });
      //


      gsap.set(`.dummy-start-scroll-${intTag}`, {height: 0});

      var tlprogressbardummyshow = gsap.timeline({delay: 1.5});
      tlprogressbardummyshow.to(`.dummy-start-scroll-${intTag}`, {height: '100%', duration: 1, ease:"out"});


    var tl = gsap.timeline({delay: 1}), 
    mySplitText = new SplitText("#quote-home", {type:"words,chars"}), 
    chars = mySplitText.chars; //an array of all the divs that wrap each character

gsap.set("#quote-home", {perspective: 400});

tl.from(chars, {duration: 0.8, y:180, transformOrigin:"0% 50% -50",  ease:"out", stagger: 0.01}, "+=0");


var tlBrief = gsap.timeline({delay: 1.5}), 
    mySplitTextNew = new SplitText("#brief", {type:"words,chars"}), 
    chars = mySplitTextNew.words; //an array of all the divs that wrap each character
    tlBrief.from(chars, {duration: 0.8, opacity: 0,  ease:"out", stagger: 0.01}, "+=0");
    gsap.set("#brief", {perspective: 400});

    var tlLabel = gsap.timeline({delay: 1.8}), 
    mySplitTextLabel = new SplitText("#openerLabel", {type:"words,chars"}), 
    chars = mySplitTextLabel.words; //an array of all the divs that wrap each character
    tlLabel.from(chars, {duration: 0.8, opacity: 0,  ease:"out", stagger: 0.01}, "+=0");
    gsap.set("#openerLabel", {perspective: 400});


    }
    if (direction === -1) {
      gsap.to(even, {
        duration: 0.8,
        y: 80 * direction,
        opacity: 0,
        delay: 0,
        ease: 'Power3.easeIn',
        stagger: {
          amount: 0.2,
        },
      });


      gsap.to(".vidContainer", {
        duration: 0.3,
        delay: 0,
        ease: 'Power1.easeInOut',
        opacity: 0
      })


      // Set logo colour
      gsap.set("path#Combined-Shape", { fill: "#fff" });
      //

      gsap.to(`.dummy-start-scroll-${intTag}`, {delay: 0, height: 0, duration: 1.5, ease:'back'});

      gsap.to(odd, {
        duration: 0.8,
        y: 80 * direction,
        opacity: 0,
        delay: 0.1,
        ease: 'Power3.easeIn',
        stagger: {
          amount: 0.1,
        },
      });

    }

    
  };


  useEffect(() => {
    textfly(textRefs.current, 1);
    gsap.set("#quote", {opacity: 0});
    console.log('IM ENTERIN!!!!!!')
  }, []);
  useEffect(() => {
    if (transitionStatus === 'exiting') {
      console.log('IM LEAVING!!')
      gsap.set("#quote-six", {opacity: 1});
      textfly(textRefs.current, -1);
    }
  }, [transitionStatus]);
  return (
    <>
      
      <main className="container mx-auto px-2 md:px-0 text-white">
      <Helmet>
      <body className="dark-theme" />
      </Helmet>
      <div id="dummyScroller" className={`dummy-start-scroll-${intTag}`}></div>
      <progress max="100" value="0"></progress>
        <Menu />
        <div className="vidContainer">
        <video muted playsInline autoPlay loop class="h-screen w-full uk-padding-large video" src="https://www.dropbox.com/s/67j9kxntrlan6wu/NewVid-Trimmed.mp4?raw=1"></video>
        </div>
        <div className="h-screen w-full flex justify-left items-center realizzazioni home-bio-container">
          <div ref={(el) => (textRefs.current[0] = el)} id="categories" className="leading-9 title-home w-full text-white">
          <p id="brief" className="text-gray-400 text-xs flex-1 pr-8 mt-0 mb-2 md:text-sm lg:leading-6">
        Show me the work
        </p>
        <p id="quote-home" className="list-none text-6xl font-thin relative overflow-hidden transform phrase">
        <p className="mb-0 font-bold lg:text-9xl">Design Director</p>
        <p className="lg:text-6xl mb-2">I am a multi disciplinary design director <br></br> based in London and Dubai</p>
        </p>

        <div class="descContainer">
        </div>


            </div>
            </div>
    

    


      </main>
      <Cursor />
      
    </>
  );
};
export default About;
