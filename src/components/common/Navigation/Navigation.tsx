import React, { FC } from 'react';
import s from './Navigation.module.css';


const Navigation = () => {
  return (
    <>
      <div className={s.navigationContainer}>
        <div>
        <h1>99A.</h1>
        <ul>
          <li><a>Profile</a></li>
          <li><a>Product</a></li>
          <li><a>Activity</a></li>
          <li><a>Tech stack</a></li>
        </ul>
          </div>
      </div>
    </>
  );
};

export default Navigation;
