import "./styles.scss";

const Section = ({ id, headerRef, className, children }) => {
  return (
    <section className={className} id={id} ref={headerRef}>
      <div className="container">{children}</div>
    </section>
  );
};

export default Section;
