import type { NextPage } from "next";
import { useRouter } from 'next/router';
import styled from "styled-components";
import MainLayout from "@components/layout/MainLayout";
import Row from "@components/layout/RowLayout"
import GlassCard from "@components/common/GlassCard";
import FlatCard from "@components/common/FlatCard";
import Button from "@components/common/Button"
import CardHeader from "@components/common/CardHeader";

const DashBoard = () => {
  const router = useRouter();

  const toApplication = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    router.push('/')
  }

  return (
    <MainLayout>
      <Row marginBottom={"100px"}>
      <FlatCard 
        width={"40%"}
        height={"100%"} 
        justify={"center"}
      >
          <h2>ようこそ、小林諒大</h2>
          <br />
          技大祭に参加していただき誠にありがとうございます。<br />
          ここでは登録情報の確認や変更が行えます。<br />
          入力締め切りはお守りいただくよう、<br />
          よろしくお願い致します。<br />
        </FlatCard>
        <GlassCard 
          width={"40%"}
          align={ "center" }
        >
          <Row justify={"start"}>
          <p>次の申請は : <b>会場電力申請</b><br/>
          締め切りは : <b>2022-7-25 23 : 59</b></p>
          </Row>
          <h1><span>あと</span>12<span>日</span></h1>
          <p>〜2022.07.25 23:59</p>
          <Button
            onClick={ toApplication }
          >
          申請へ
          </Button>
        </GlassCard>
      </Row>
      <Row marginBottom={"100px"}>
      <GlassCard>
        <CardHeader>News</CardHeader>
        <table>
          <tbody>
            <tr>
              <td>2021.05.23</td>
              <td>第一回参加団体説明会のお知らせ</td>
            </tr>
            <tr>
              <td>2021.05.23</td>
              <td>第一回参加団体説明会のお知らせ</td>
            </tr>
            <tr>
              <td>2021.05.23</td>
              <td>第一回参加団体説明会のお知らせ</td>
            </tr>
          </tbody>
        </table>
      </GlassCard>
      </Row>
    </MainLayout>
  );
}

export default DashBoard
