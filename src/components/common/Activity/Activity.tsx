import React from 'react';
import s from './Activity.module.css';

const Activity = () => {
  return (
    <div className={s.contentContainer}>
      <table>
        <tbody>
          <tr><th>2013.4</th><td>群馬工業高等専門学校 環境都市工学科 入学</td></tr>
          <tr><th>2018.3</th><td>群馬工業高等専門学校 環境都市工学科 卒業</td></tr>
          <tr><th>2018.4</th><td>長岡技術科学大学 環境社会基盤工学課程 入学</td></tr>
          <tr><th>2018.5</th><td>技大祭実行委員会 入会</td></tr>
          <tr><th>2020.3</th><td>長岡技術科学大学 環境社会基盤工学課程 卒業</td></tr>
          <tr><th>2020.4</th><td>長岡技術科学大学院 環境社会基盤工学専攻 入学</td></tr>
          <tr><th>2020.6</th><td>NUTMEG 発足</td></tr>
          <tr><th>2020.11</th><td>サポーターズハッカソン参加</td></tr>
          <tr><th>2022.3</th><td>長岡技術科学大学院 環境社会基盤工学専攻 修了</td></tr>
        </tbody>
      </table>
    </div>
  );
};

export default Activity;
