import React, { useEffect } from 'react';
import gsap from 'gsap';
import { SplitText } from "../components/SplitText";
import { StaticImage } from "gatsby-plugin-image";
import { Menu } from '../components/Menu';





// markup
const IndexPage = ({ transitionStatus }) => {
  useEffect(() => {
    gsap.to('.hometex', {
      autoAlpha: 1,
      duration: 1,
    });
  }, []);
  useEffect(() => {
    if (transitionStatus === 'entering') {
      gsap.to('.hometex', {
        autoAlpha: 1,
        duration: 1,
      });
    }
    if (transitionStatus === 'exiting') {
      gsap.to('.hometex', { autoAlpha: 0, duration: 1 });
    }
  }, [transitionStatus]);
  return (
    <>




          <div class="hide-images">
          {/* First one */}
          <StaticImage src="../images/u2-op.jpg" alt="A Image" />

          {/* Last one */}
          <StaticImage src="../images/DSC02018-2.jpg" alt="A Image" />

          {/* Sikka */}
          <StaticImage src="../images/DSC01883.jpg" alt="A Image" />

          {/* Beauty */}
          <StaticImage src="../images/bottle.jpg" alt="A Image" />

          {/* UI */}
          <StaticImage src="../images/ui.jpg" alt="Image" />
          </div>
      <main className="container mx-auto px-2 md:px-0">
        <Menu />
        <div className="text-3xl w-full mx-auto justify-center flex font-bold hometex opacity-0">
          Placeholder Landing page. Click on one of the test case study links above... (Nav also placeholder to test content loading / display)
          

        </div>
      </main>
    </>
  );
};

export default IndexPage;
