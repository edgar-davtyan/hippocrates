import "./styles.scss";

const CollapseTags = ({ descriptionItems }) => {
  return (
    <div className="collapse_tags_box">
      <div className="collapse_box_banner">
        <div className="collapse_title">
          <h3>MIGRAINE HEADACHE</h3>
        </div>
      </div>
      <div className="collapse_tags_description">
        <h4>Description</h4>
        <div className="collapse_description_items">
          {descriptionItems &&
            descriptionItems.map((item, index) => (
              <div className="description_items" key={index}>
                <p>{item.text}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CollapseTags;
