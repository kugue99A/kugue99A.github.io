import React, { FC } from 'react';
import s from './Product.module.css';

const Product = () => {
  return (
    <div className={s.contentContainer}>
      <table>
        <tbody>
          <tr><th>Group Manager 2</th><td>デザイナー, フロントエンド, バックエンド</td></tr>
          <tr><th>Seeft</th><td>フロントエンド</td></tr>
          <tr><th>マッサージ治療院の患者管理アプリ</th><td>フロントエンド</td></tr>
          <tr><th>NUTMEG-Seeds</th><td>PM, デザイナー, フロントエンド, バックエンド</td></tr>
        </tbody>
      </table>
    </div>
  );
};

export default Product;
