import React, { useEffect, useRef, createRef } from "react";
import gsap from 'gsap';
import Cursor from '../components/Cursor';
import ModalContent from "./ModalContent";
import {mItems} from "./ModalContent";

gsap.registerPlugin()

function Modal(props) {
  const modalRef = createRef();
  const modalScrimRef = createRef();
  const modalCardRef = createRef();
  const menuItems = createRef();
  const tl = useRef();

  useEffect(() => {
    if (props.modal) {
      tl.current = gsap
        .timeline({
          onReverseComplete: () => {
            props.setModal(false);
          }
        })
        .set(modalRef.current, { autoAlpha: 1 })
        .to(modalRef.current, { duration: 0.8, opacity: 1, width: '100%', ease: 'power2.inOut'})
        .to(modalScrimRef.current, { duration: 0.25, autoAlpha: 1, y: 0 })
        .fromTo(
          modalCardRef.current,
          { y: 0, autoAlpha: 1 },
          { duration: 1, y: 0, autoAlpha: 1 }
        );
    }
  }, [modalRef, modalScrimRef, modalCardRef, props]);

  const close = e => {
    e.preventDefault();
    tl.current = gsap.to('.menu-content-items', { delay: 0, opacity: 0, duration: 0.8, ease: 'power2.inOut', onComplete: changeProps})
    tl.current = gsap.to(modalRef.current, {delay:0.6, duration: 0.8, opacity: 1, width: '0%', ease: 'power2.inOut'})
    tl.current = gsap.set(modalScrimRef.current, { delay: 2, opacity: 0, visibility: 'hidden'})
    tl.current = gsap.set(modalRef.current, { delay:2, opacity: 0, visibility: 'hidden'})
    
  };

  function changeProps() {
    props.setModal(false);
  }


  return (
    <div ref={modalRef} onClick={close} className="modal">
      <Cursor />
      <div ref={modalScrimRef} className="modal__scrim" />
      <div ref={modalCardRef} className="modal__card h-screen flex">
        {props.modal ? <ModalContent ref={menuItems} modal={props.modal} /> : null}
      </div>
    </div>
  );
}

export default Modal;

  