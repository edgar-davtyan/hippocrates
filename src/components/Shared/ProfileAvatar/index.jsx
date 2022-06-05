import { useState, useRef, useEffect } from "react";
import Image from "../Image";
import Modal from "../Modal";
import InnerButton from "../InnerButton";
import AvatarSettings from "../AvatarSettings";
import profileImg from "../../../public/images/img/profileImg.png";

import "./styles.scss";

const ProfileAvatar = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAvatarModal, setShowAvatarModal] = useState(false);

  const avatarModalRef = useRef();

  const checkIfClickedOutside = (e) => {
    if (
      showAvatarModal &&
      avatarModalRef.current &&
      !avatarModalRef.current.contains(e.target)
    ) {
      setShowAvatarModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal]);

  return (
    <section ref={avatarModalRef}>
      <div className="profile_box">
        <div
          className="avatar_box"
          onClick={() => setShowAvatarModal(!showAvatarModal)}
        >
          <Image imgSrc={profileImg} />
        </div>
        <div
          className="profile_modal"
          style={{ transform: `${showAvatarModal ? "scale(1)" : "scale(0)"} ` }}
        >
          <div className="avatar_info">
            <div>G</div>
            <p>Gruzoviks@gmail.com</p>
          </div>
          <div className="logout_btn_box">
            <InnerButton text="Profile" onClick={() => setShowModal(true)} />
            <InnerButton text="Logout" />
          </div>
        </div>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <AvatarSettings setShowModal={setShowModal} />
      </Modal>
    </section>
  );
};
export default ProfileAvatar;
