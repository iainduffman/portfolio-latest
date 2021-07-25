import React, { useState, useEffect } from "react";
import TransitionLink from 'gatsby-plugin-transition-link';
import { StaticImage } from "gatsby-plugin-image";
import Drawer from "./Drawer";
import IconBlack from "../images/artboard-logo.inline.svg";
import "/src/style/global.css"
import MenuLeft from "../images/burger.inline.svg";


export const Menu = () => {

  const [modal, setModal] = useState(false);


  const btnClick = e => {
    e.preventDefault();

    setModal(true);
  };

  
  
  return (
    
    <>

    
      <div className="flex mb-20 justify-between menu">
      <div className="mr-8 text-md uppercase menuLeftWrapper">
            <a href="#" onClick={btnClick}>


            <MenuLeft className="menuLeftIcon"/>
            <p>M</p>
            </a>
            
          </div>
          <Drawer modal={modal} setModal={setModal} />

          


      
        <div className="flex">
          <div className="mr-8 text-md uppercase">

          <TransitionLink
              to="/"
              exit={{
                length: 2,
                delay: 1.4
              }}
              entry={{ length: 1, delay: 0 }}
              className=""
              activeClassName=""
            >
            <IconBlack className="myLogoBlack"/>
            </TransitionLink>


         
          </div>


          {/* <div className="mr-8 text-md uppercase">
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
          </div> */}


        </div>


        <div className="flex">
          <div className="mr-8 text-md uppercase">
          <a className="downloadLink" href="#">
          <TransitionLink
              to="/about"
              exit={{
                length: 2,
                delay: 1.4
              }}
              entry={{ length: 1, delay: 0 }}
              className=""
              activeClassName=""
            >
            Resume  
            </TransitionLink>
          
            </a>
          </div>


          {/* <div className="mr-8 text-md uppercase">
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
          </div> */}


        </div>

      </div>
    </>
  );
};
