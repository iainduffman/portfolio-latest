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
            <a href="#" onClick={btnClick}>
              Menu Toggle Placehold
            </a>
            <Drawer modal={modal} setModal={setModal} />
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
