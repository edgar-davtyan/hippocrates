import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DESKTOP_PATH } from "../../../constants/desktopPath";

import "./styles.scss";

const Modal = ({ top = 10, showModal, setShowModal, children }) => {
  const modalRef = useRef();

  const { pathname } = useLocation();

  const desktopMainPath = pathname === DESKTOP_PATH.desktopMain;

  const checkIfClickedOutside = (e) => {
    if (showModal && modalRef.current && !modalRef.current.contains(e.target)) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    const scroolToModal = setTimeout(() => {
      const modalChild = document.querySelector(".modal_section")?.offsetTop;
      window.scrollTo({
        top: modalChild,
        behavior: "smooth",
      });
    }, 100);

    return () => clearTimeout(scroolToModal);
  }, [showModal]);

  useEffect(() => {
    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal]);

  return (
    <>
      {showModal && (
        <section
          className="modal_section"
          style={{
            height: `${desktopMainPath ? "100vh" : "100%"}`,
          }}
        >
          <div
            className="modal_container"
            ref={modalRef}
            style={{
              top: window.innerHeight / 2 + top + "px",
            }}
          >
            {children}
          </div>
        </section>
      )}
    </>
  );
};

export default Modal;
