import React from 'react';
import s from './Navigation.module.css';

interface NavigationProps {
  setContent: Function;
}

const Navigation = (props: NavigationProps) => {
  return (
    <>
      <div className={s.navigationContainer}>
        <div>
          <h1>99A.</h1>
          <ul>
            <li onClick={()=>{props.setContent("profile")}}><a>Profile</a></li>
            <li onClick={()=>{props.setContent("product")}}><a>Product</a></li>
            <li onClick={()=>{props.setContent("activity")}}><a>Activity</a></li>
            <li onClick={()=>{props.setContent("tech_stack")}}><a>Tech stack</a></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navigation;
