import React from 'react';

function SideBar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <h1 className="logoImg">Pinstagram</h1>
      </div>
      <div className="navigations">
        <div className="navigations_menu-item">
          <span>
            <i class="fa-solid fa-house"></i>
          </span>
          Home
        </div>
        <div className="navigations_menu-item">
          <span>
            <i class="fa-solid fa-magnifying-glass"></i>
          </span>
          Search
        </div>
        <div className="navigations_menu-item">
          <span>
            <i class="fa-solid fa-compass"></i>
          </span>
          Explore
        </div>
        <div className="navigations_menu-item">
          <span>
            <i class="fa-solid fa-video"></i>
          </span>
          Reels
        </div>
        <div className="navigations_menu-item">
          <span>
            <i class="fa-solid fa-message"></i>
          </span>
          Messages
        </div>
        <div className="navigations_menu-item">
          <span>
            <i class="fa-solid fa-heart"></i>
          </span>
          Notifications
        </div>
        <div className="navigations_menu-item">
          <span>
            <i class="fa-solid fa-square-plus"></i>
          </span>
          Create
        </div>
        <div className="navigations_menu-item">
          <span>
            <i class="fa-sharp fa-solid fa-user"></i>
          </span>
          Profile
        </div>
        <div className="navigations_menu-item menu-item_last">
          <span>
            <i class="fa-solid fa-bars"></i>
          </span>
          More
        </div>
      </div>
    </div>
  );
}

export default SideBar;
