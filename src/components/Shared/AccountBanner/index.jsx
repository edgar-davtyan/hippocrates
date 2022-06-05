import Tag from "../Tag";
import Icon from "../Icon";
import accountVectorIcon from "../../../public/images/icon/accountVector.svg";

import "./styles.scss";

const AccountBanner = () => {
  const tagItems = [
    { text: "Vertigo", key: 1 },
    { text: "weight loss", key: 2 },
    { text: "Vomiting", key: 3 },
  ];

  return (
    <div className="account_banner_box">
      <div className="account_info">
        <div className="account_vector">
          <Icon iconSrc={accountVectorIcon} />
        </div>
        <div className="account_names">
          <h3>William Jacobson</h3>
          <div className="information">
            <div>
              <p>Age:</p>
              <span>48</span>
            </div>
            <div>
              <p>Gender:</p>
              <span>Male</span>
            </div>
          </div>
        </div>
      </div>
      <div className="tag_container">
        <Tag tagList={tagItems} />
      </div>
    </div>
  );
};

export default AccountBanner;
