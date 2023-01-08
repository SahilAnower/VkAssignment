import React, { useState } from 'react';

function EachPost(props) {
  let [hidden, setHidden] = useState(true);

  const hoverHandler = () => {
    setHidden(!hidden);
  };

  return (
    <div
      className="eachPost"
      onMouseEnter={hoverHandler}
      onMouseLeave={hoverHandler}
    >
      <img className="postImage" src={props.imgUrl} alt="" />
      <div className={hidden && 'off'}>
        <div className="postLikes">
          <span>
            <i className="fa-solid fa-heart"></i> 5.3M
          </span>
          <span>
            <i className="fa-solid fa-comment"></i> 23.8K
          </span>
        </div>
      </div>
    </div>
  );
}

export default EachPost;
