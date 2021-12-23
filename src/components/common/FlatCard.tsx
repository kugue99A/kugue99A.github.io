import React from "react";
import styled from "styled-components";

type CardContentsProps = {
  width?: string
  height?: string
  align?: string
  justify?: string
  children: React.ReactNode;
};

function FlatCard(props: CardContentsProps): JSX.Element {
  const FlatCardContainer = styled.div`
    background-color: var(--accent-0);
    width: ${props.width};
    height: ${props.height};
    border-radius: var(--card-radius);
    padding: 0px;
    backdrop-filter: blur(4px);
    flex-grow: 1;
    display: flex;
    flex-flow: column;
    align-items: ${props.align || "start"};
    justify-content: ${props.justify || "start"}
    font-size: 24px;
  `;

  return (
    <>
      <FlatCardContainer>{ props.children }</FlatCardContainer>
    </>
  );
}

export default FlatCard;
