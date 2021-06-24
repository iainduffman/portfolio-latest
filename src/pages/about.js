import React, { useEffect, useRef } from 'react';
import { Menu } from '../components/Menu';
import Cursor from '../components/Cursor';
import Helmet from 'react-helmet'
import gsap from 'gsap';
import { SplitText } from "../components/SplitText";
import { ScrollTrigger } from "../components/ScrollTrigger";
import { StaticImage } from "gatsby-plugin-image";

gsap.registerPlugin(ScrollTrigger);

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

      gsap.from(even, {
        duration: 1,
        y: 100 * direction,
        opacity: 0,
        delay: 0.9,
        ease: 'power4.inOut',
        stagger: {
          amount: 0.3,
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

      gsap.set(".dummy-start-scroll-about", {height: 0});

      var tlprogressbardummyshow = gsap.timeline({delay: 1.5});
      tlprogressbardummyshow.to(".dummy-start-scroll-about", {height: 70, duration: 1, ease:"out"});


    var tl = gsap.timeline({delay: 1}), 
    mySplitText = new SplitText("#quote-two", {type:"words,chars"}), 
    chars = mySplitText.chars; //an array of all the divs that wrap each character

gsap.set("#quote-two", {perspective: 400});

tl.from(chars, {duration: 0.8, y:180, transformOrigin:"0% 50% -50",  ease:"out", stagger: 0.01}, "+=0");


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

                  // Set logo colour
                  gsap.set("path#Combined-Shape", { fill: "#fff" });
                  //

      gsap.to(".dummy-start-scroll-about", {delay: 1, height: 0, duration: 0.5, ease:'back'});

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
      gsap.set("#quote-two", {opacity: 1});
      textfly(textRefs.current, -1);
    }
  }, [transitionStatus]);
  return (
    <>
      
      <main className="container mx-auto px-2 md:px-0 text-white">
      <Helmet>
      <body className="dark-theme" />
      </Helmet>
      <div className="dummy-start-scroll-about"></div>
      <progress max="100" value="0"></progress>
        <Menu />
        <div className="w-full h-full flex justify-center items-center realizzazioni">
          <div id="categories" className="leading-9 title w-full md:w-1/2 text-red-600">
          <p id="quote-two" className="list-none text-6xl md:text-6xl lg:text-8xl font-thin relative overflow-hidden uppercase transform phrase">
          __Meet the brand that thrives after <span className="text-white">midnight.</span>
          </p>
            <p ref={(el) => (textRefs.current[0] = el)} id="copy" className="overflow-hidden mt-8 text-gray-400" >Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
            </p>
            </div>
            </div>
      
            <section ref={(el) => (textRefs.current[1] = el)} className="default mt-16 mb-16"><StaticImage src="../images/DSC02126.jpg" /></section>

            <section ref={(el) => (textRefs.current[2] = el)} className="default mt-16 mb-16"><StaticImage src="../images/DSC02131.jpg" /></section>

            <div className="w-full h-full flex justify-center items-center realizzazioni">
            <div id="categories" className="leading-9 title w-full md:w-1/2">
            
            <div ref={(el) => (textRefs.current[2] = el)} class="flex">
            <p className="text-gray-400 flex-1 pr-8">
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo odio, dapibus ac facilisis in, egestas eget quam.Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            </p>

            <p className="text-gray-400 flex-1 pl-8">
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo odio, dapibus ac facilisis in, egestas eget quam.Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            </p>



            </div>

            <section className="default mt-16 mb-16"><StaticImage src="../images/DSC02140.jpg" alt="A dinosaur" /></section>

            <p className="text-gray-400">

            Lalalal Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo odio, dapibus ac facilisis in, egestas eget quam.Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.

            <br></br><br></br>

            <p id="quote-two" className="text-white list-none text-6xl md:text-6xl lg:text-8xl font-thin relative overflow-hidden uppercase transform phrase">
            "We found __that everything <span className="text-red-600">needed to be</span> tested__"
            </p>

            <br></br>

            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo odio, dapibus ac facilisis in, egestas eget quam.Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo odio, dapibus ac facilisis in, egestas eget quam.Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
            </p>
            
          </div>
        </div>

        <section className="default mt-16 mb-16"><StaticImage src="../images/DSC02266-2.jpg" alt="" /></section>
        <section className="default mt-16 mb-16"><StaticImage src="../images/DSC02250.jpg" alt="" /></section>
        <section className="default mt-16 mb-16"><StaticImage src="../images/DSC02299.jpg" alt="" /></section>

      <div className="w-full h-full flex justify-center items-center realizzazioni">
      <div id="categories" className="leading-9 title w-full md:w-1/2">

      <p class="mb-32">Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo odio, dapibus ac facilisis in, egestas eget quam.Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo odio, dapibus ac facilisis in, egestas eget quam.Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
      
      
      </div>
      </div>
      </main>
      <Cursor />
      
    </>
  );
};
export default About;
