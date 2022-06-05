import { useState } from "react";
import Icon from "../Icon";
import deleteXicon from "../../../public/images/icon/deleteX.svg";

import "./styles.scss";

const Tag = ({ tagList }) => {
  const [tagItems, setTagItems] = useState(tagList);

  const deleteElement = (item) => {
    const newTagItems = [];
    for (let i = 0; i < tagItems?.length; i++) {
      if (tagItems[i].text !== item.text) {
        newTagItems.push(tagItems[i]);
      }
    }
    setTagItems(newTagItems);
  };

  return (
    <>
      {tagItems &&
        tagItems.map((item) => (
          <div className="tag_box" key={item.key}>
            <p className="tag_text">{item.text}</p>
            <div className="tag_icon" onClick={() => deleteElement(item)}>
              <Icon iconSrc={deleteXicon} />
            </div>
          </div>
        ))}
    </>
  );
};

export default Tag;
