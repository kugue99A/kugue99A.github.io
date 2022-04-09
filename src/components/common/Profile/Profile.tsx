import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div className={s.contentContainer}>
      <img src='/99a.png'/>
      <table>
        <tbody>
          <tr><th>Name:</th><td>久々江 耀平</td></tr>
          <tr><th>University:</th><td>長岡技術科学大学</td></tr>
          <tr><th>From:</th><td>群馬県</td></tr>
          <tr><th>Favorite:</th><td>ラーメン二郎, vim, サウナ, 散歩</td></tr>
        </tbody>
      </table>
    </div>
  );
};

export default Profile;
