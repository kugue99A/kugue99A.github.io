import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import { useState } from 'react';
import Head from 'next/head'
import MainLayout from '@components/layout/MainLayout'
import Row from '@components/layout/RowLayout'
import Navigation from '@components/common/Navigation'
import Profile from '@components/common/Profile'
import Product from '@components/common/Product'
import Activity from '@components/common/Activity'
import TechStack from '@components/common/TechStack'

const Home: NextPage = () => {
  const [content, setContent] = useState("profile");

  const router = useRouter();

  const LoginClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    router.push('/dashboard')
  }
  const pageContent = (content: any) => {
    console.log(content)
    if (content == 'profile') {
      return (
        <>
          <Profile />
        </>
      )
    }
    else if (content == 'product') {
      return (
        <>
          <Product />
        </>
      )
    }
    else if (content == 'activity') {
      return (
        <>
          <Activity />
        </>
      )
    }
    else if (content == 'tech_stack') {
      return (
        <>
          <TechStack />
        </>
      )
    }
  }
  return (
    <>
      <Head>
        <title>Kugue Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Inter:wght@100;300;500;700&display=swap'
        />
      </Head>
      <MainLayout>
        <Row>
          <Navigation setContent={setContent}/>
          { pageContent(content) }
        </Row>
      </MainLayout>
    </>
  )
}

export default Home