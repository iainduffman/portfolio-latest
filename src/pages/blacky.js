import React, { useEffect, useRef } from 'react';
import { Menu } from '../components/Menu';
import Cursor from '../components/Cursor';
import Helmet from 'react-helmet'
import gsap from 'gsap';
import { SplitText } from "../components/SplitText";
import { ScrollTrigger } from "../components/ScrollTrigger";
import { StaticImage } from "gatsby-plugin-image";


gsap.registerPlugin(ScrollTrigger);

const intTag = 'blacky';

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

    var action = gsap.set('.article-header-cont', {position:'fixed', zIndex: 3000, width: '512px', top: '78px', duration: 0.4, paused:true});
  
    ScrollTrigger.create({
      trigger: ".left-quote-col",
      start: "top 90px",
      end: "+=50000", // end after scrolling 500px beyond the start
      onEnter: () => action.play(),
      onLeave: () => action.reverse(),
      onLeaveBack: () => action.reverse(),
      onEnterBack: () => action.reverse(),
      markers:false
    });


    if (direction === 1) {


      gsap.set(`.littleLabel-${intTag}`, {opacity: 0});

      gsap.to('.line', {
        duration: 0.6,
        delay: 1,
        ease: 'Power1.easeInOut',
        backgroundColor: 'rgb(41, 41, 41)'
      })
   

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
        backgroundColor: '#16171C'
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

      // Fade in work title label
      gsap.to(`.littleLabel-${intTag}`, { opacity: 1, delay: 1.5, duration: 0.5 });
      //

      gsap.set(`.dummy-start-scroll-${intTag}`, {height: 0});

      var tlprogressbardummyshow = gsap.timeline({delay: 1.5});
      tlprogressbardummyshow.to(`.dummy-start-scroll-${intTag}`, {height: 70, duration: 1, ease:"out"});


      var tl = gsap.timeline({delay: 1}), 
      mySplitText = new SplitText(`#quote-${intTag}`, {type:"words,chars"}), 
      chars = mySplitText.chars; //an array of all the divs that wrap each character
      gsap.set(`#quote-${intTag}`, {perspective: 400});
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

            // Fade in work title label
            gsap.to(`.littleLabel-${intTag}`, { opacity: 0, delay: 0, duration: 0.3 });
            //


      // Set logo colour
      gsap.set("path#Combined-Shape", { fill: "#fff" });
      //


      gsap.to(`.dummy-start-scroll-${intTag}`, {delay: 1, height: 0, duration: 0.5, ease:'back'});

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
        <Menu/>
        <div className="w-full h-full flex justify-left realizzazioni">
          <div id="categories" className="leading-9 title w-1/3 text-red-600 left-quote-col">
          <div className="article-header-cont">
          <p className={`littleLabel-${intTag} mb-0 font-medium text-1xl mb-8 text-xs`}>04 | Chervex Skin</p>
          <p id={`quote-${intTag}`} className="list-none text-6xl md:text-6xl lg:text-7xl font-thin relative overflow-hidden uppercase transform phrase article-header">
          Meet the brand that thrives at <span className="text-white">35,000 Ft</span>
          </p>
          <p ref={(el) => (textRefs.current[0] = el)} id="copy" className="mt-4 overflow-hidden text-gray-400 text-xs leading-7" >Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
          </div>
          </div>


            <div id="categories" className="leading-9 title w-2/3 pl-32 text-red-600">

            <section ref={(el) => (textRefs.current[1] = el)} className="default mt-6 mb-16"><StaticImage src="../images/DSC02478.jpg" /></section>

            <section ref={(el) => (textRefs.current[2] = el)} className="default mt-16 mb-16"><StaticImage src="../images/b2.jpg" /></section>


            <div ref={(el) => (textRefs.current[3] = el)} class="flex">
            <p className="text-gray-400 flex-1 pr-8 text-xs leading-7">
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo odio, dapibus ac facilisis in, egestas eget quam.Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            </p>

            <p className="text-gray-400 flex-1 pl-8 text-xs leading-7">
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo odio, dapibus ac facilisis in, egestas eget quam.Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            </p>



            </div>

            <section ref={(el) => (textRefs.current[4] = el)} className="default mt-16 mb-16"><StaticImage src="../images/drinktest.jpg" /></section>

          

<section className="default mt-16 mb-16"><StaticImage src="../images/DSC02266-2.jpg" alt="" /></section>
        <section className="default-double mt-16 mb-16"><StaticImage src="../images/portrait-drink.jpg" alt="" /></section>
        <section className="lastimage default mt-16 mb-16"><StaticImage src="../images/DSC02299.jpg" alt="" /></section>
            
            </div>


            </div>
      
          



      </main>
      <Cursor />
      
    </>
  );
};
export default About;
