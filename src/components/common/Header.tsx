import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Account from '@components/icons/Account';

function Header() {

  const [headerColor, setHeaderColor] = useState("var(--secondary)");

  const [headerBackgroundColor, setHeaderBackgroundColor] = useState("white");

  const [headerShadow, setHeadershadow] = useState("0px");

  const listenScrollEvent = () => {
    if (window.scrollY < 1) {
      return setHeaderBackgroundColor("var(--accent0)"), setHeaderColor("var(--secondary)"), setHeadershadow("0px");
    } else {
      return setHeaderBackgroundColor("rgba(255, 255, 255, 0.8)"), setHeaderColor("var(--primary)"), setHeadershadow("4px 20px rgba(0, 0, 0, 0.25)");
    }
  }
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)
  })

  const fadeIn = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `;

  const HeaderContainer = styled.section`
    box-shadow: 0px ${headerShadow};
    color: ${headerColor};
    background-color: ${headerBackgroundColor};
    animation: ${fadeIn} .5s ease-in-out;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    position: fixed;
    top: 0;
    height: 60px;
    width: 100%;
    padding: 0px 200px;
    z-index: 1;
    display: flex;
    justify-content: start;
  `

  const HeaderImage = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: end;
  `

  const Header = styled.header`
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
  `
  const imagePath = "/logo.svg";

  return (
    <HeaderContainer>
      <Header>
      <img
        src={imagePath} 
        height="20" 
        width="142"
      />
      <HeaderImage>
      <Account 
        height={30}
        width={30}
        color={headerColor}
      />
      </HeaderImage>
      </Header>
    </HeaderContainer>
  );
}

export default Header;
