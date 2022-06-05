import "./styles.scss";

const TitleSubtitle = ({ title, subTitle, description, textAlign }) => {
  return (
    <div className="title_subtitle_box" style={{ textAlign }}>
      {title && <p>{title}</p>}
      {subTitle && <h3>{subTitle}</h3>}
      {description && <p className="description_text">{description}</p>}
    </div>
  );
};

export default TitleSubtitle;
