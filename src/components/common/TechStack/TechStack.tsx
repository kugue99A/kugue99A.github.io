import React, { FC } from 'react';
import s from './TechStack.module.css';

const TechStack = () => {
  return (
    <div className={s.contentContainer}>
      <table>
        <tbody>
          <tr><th>HTML</th><td>ホームページ作成，Webフロント</td></tr>
          <tr><th>CSS</th><td>ホームページ作成，Webフロント</td></tr>
          <tr><th>JavaScript</th><td>ホームページ作成，Webフロント</td></tr>
          <tr><th>TypeScript</th><td>Webフロント，APIサーバー（試作）</td></tr>
          <tr><th>Vue.js</th><td>Webフロント</td></tr>
          <tr><th>Nuxt</th><td>Webフロント</td></tr>
          <tr><th>React</th><td>Webフロント</td></tr>
          <tr><th>Next.js</th><td>Webフロント</td></tr>
          <tr><th>Dart</th><td>Webフロント, モバイル</td></tr>
          <tr><th>Flutter</th><td>Webフロント, モバイル</td></tr>
          <tr><th>Fortran</th><td>物理演算</td></tr>
          <tr><th>Python</th><td>物理演算, 機械学習</td></tr>
        </tbody>
      </table>
    </div>
  );
};

export default TechStack;
