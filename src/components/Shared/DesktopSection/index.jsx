import "./styles.scss";

const DesktopSection = ({ id, headerRef, className, children }) => {
  return (
    <section className={className} id={id} ref={headerRef}>
      <div className="desktop_container">{children}</div>
    </section>
  );
};

export default DesktopSection;
