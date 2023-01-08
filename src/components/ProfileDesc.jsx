import React from 'react';

function ProfileDesc() {
  return (
    <div className="profileDesc">
      <div className="profileImage">
        <img className="image" src={require('../img/vk_profile.jpg')} alt="" />
      </div>
      <div className="profileDetails">
        <div className="name">
          <div>
            <h3>
              virat.kohli <i className="fa-solid fa-square-check tick"></i>
            </h3>
          </div>
          <div>
            <button className="btn btn-blue">Follow</button>
            <button className="btn">Message</button>
            <button className="btn">
              <i className="fa-solid fa-user-plus"></i>
            </button>
            <button className="btn btn-bg">
              <i className="fa-solid fa-ellipsis"></i>
            </button>
          </div>
        </div>
        <div className="followers">
          <div>1492 posts</div>
          <div>230M followers</div>
          <div>262 following</div>
        </div>
        <div className="nameDesc">
          <p>Virat Kohli</p>
          <p>Carpediem!</p>
          <p>
            <a href="https://l.instagram.com/?u=http%3A%2F%2Fone8.com%2F&e=ATMQmbjL-OhFbI7CAA-eS8sjIhf0lQSB4Zb_DNxD4yAbiR9GnkfTvMdopXkEW1gwoGiEc37nArhz2ceu-sllDnrfh1bN0J8NfKY4mns">
              one8.com
            </a>
          </p>
        </div>
        <div className="followedDesc">
          <p>
            Followed by mustakim_sk311, blithe_chronicle_, mrunalthakur + 18
            more
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfileDesc;
