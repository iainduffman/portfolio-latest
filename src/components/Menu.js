import React, { useState, useEffect } from "react";
import TransitionLink from 'gatsby-plugin-transition-link';
import Drawer from "./Drawer";

export const Menu = () => {

  const [modal, setModal] = useState(false);


  const btnClick = e => {
    e.preventDefault();

    setModal(true);
  };
  
  return (
    
    <>
    

      <div className="flex mb-20 justify-between menu">
      <div className="mr-8 text-md uppercase">
            <a href="#">
              Logo
            </a>
            <Drawer modal={modal} setModal={setModal} />
          </div>

          


      
        <div className="flex">
          <div className="mr-8 text-md uppercase">
          <a href="#" onClick={btnClick}>
              Open Menu
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
