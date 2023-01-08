import React from 'react';
import EachPost from './EachPost';

let images = [
  require('../img/post1.jpg'),
  require('../img/post2.jpg'),
  require('../img/post3.jpg'),
  require('../img/post4.jpg'),
  require('../img/post5.jpg'),
  require('../img/post6.jpg'),
  require('../img/post7.jpg'),
  require('../img/post8.jpg'),
  require('../img/post9.jpg'),
  require('../img/post10.jpg'),
  require('../img/post11.jpg'),
  require('../img/post12.jpg'),
  require('../img/post13.jpg'),
  require('../img/post14.jpg'),
  require('../img/post15.jpg'),
  require('../img/post16.jpg'),
  require('../img/post17.jpg'),
  require('../img/post18.jpg'),
  require('../img/post19.jpg'),
];

function ProfilePosts() {
  return (
    <>
      <div className="categories">
        <div className="active">
          <i class="fa-solid fa-signs-post"></i> Posts
        </div>
        <div>
          <i class="fa-solid fa-video"></i> Reels
        </div>
        <div>
          <i class="fa-solid fa-user"></i> Tagged
        </div>
      </div>
      <div className="allPosts">
        {images.map((i) => (
          <EachPost key={i} imgUrl={i} />
        ))}
      </div>
    </>
  );
}

export default ProfilePosts;
