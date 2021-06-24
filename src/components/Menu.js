import React, { useState, useEffect } from "react";
import TransitionLink from 'gatsby-plugin-transition-link';
import { StaticImage } from "gatsby-plugin-image";
import Drawer from "./Drawer";
import IconBlack from "../images/artboard-logo.inline.svg";
import MenuLeft from "../images/bars-light.inline.svg";

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
          <IconBlack className="myLogoBlack"/>
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
          <a href="#" onClick={btnClick}>
          Menu
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
