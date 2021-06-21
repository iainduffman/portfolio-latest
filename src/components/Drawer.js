import React, { useEffect, useRef, createRef } from "react";
import gsap from 'gsap';
import Cursor from '../components/Cursor';
import ModalContent from "./ModalContent";

gsap.registerPlugin()

function Modal(props) {
  const modalRef = createRef();
  const modalScrimRef = createRef();
  const modalCardRef = createRef();
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
        .to(modalRef.current, { duration: 0.8, opacity: 1, width: '100%', easing: 'power2.inOut'})
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

    tl.current.timeScale(2).reversed(props.modal);
  };

  return (
    <div ref={modalRef} onClick={close} className="modal">
      <Cursor />
      <div ref={modalScrimRef} className="modal__scrim" />
      <div ref={modalCardRef} className="modal__card">
        {props.modal ? <ModalContent modal={props.modal} /> : null}
      </div>
    </div>
  );
}

export default Modal;

  