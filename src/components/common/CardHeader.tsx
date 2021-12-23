import React from "react";
import styled from "styled-components";
import Arrow from "@components/icons/RightArrow";

type CardHeaderContentsProps = {
  width?: string
  height?: string
  align?: string
  justify?: string
  children: React.ReactNode;
};

function CardHeader(props: CardHeaderContentsProps): JSX.Element {
  const CardHeaderContainer = styled.div`
    color: white;
    background-color: #333;
    width: ${props.width || "450px"};
    height: ${props.height || "50px"};
    padding: 30px 50px 30px 30px;
    margin-left: -50px;
    flex-grow: 1;
    display: flex;
    align-items: ${props.align || "center"};
    justify-content: ${props.justify || "start"};
    font-size: 20px;
  `;

  return (
    <>
    <CardHeaderContainer>
      <Arrow width={30} height={30}color={"white"}/>
      { props.children }
    </CardHeaderContainer>
    </>
  );
}

export default CardHeader;
