import React, { useState } from "react";

function ItemArticle({ article }) {
  const [isShowAbout, setIsShowAbout] = useState(false);

  const handleTitleClick = () => {
    setIsShowAbout((prev) => !prev);
  };

  return (
    <div>
      <h2 onClick={handleTitleClick}>{article.title}</h2>
      {isShowAbout && <p>{article.about}</p>}
    </div>
  );
}

export default ItemArticle;
