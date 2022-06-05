import "./styles.scss";

const Image = ({ imgSrc }) => {
  return (
    <div className="img_box">
      <img src={imgSrc} alt="#" />
    </div>
  );
};

export default Image;
