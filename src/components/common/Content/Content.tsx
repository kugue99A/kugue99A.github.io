import React, { FC } from 'react';
import s from './Content.module.css';

const Content = () => {
  return (
    <div className={s.contentContainer}>
      <h2>Profile</h2>
      <table>
        <tbody>
          <tr><th>Name:</th><td>久々江 耀平</td></tr>
          <tr><th>University:</th><td>長岡技術科学大学</td></tr>
          <tr><th>From:</th><td>群馬県</td></tr>
        </tbody>
      </table>
    </div>
  );
};

export default Content;
