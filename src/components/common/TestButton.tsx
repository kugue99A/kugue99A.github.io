import React from 'react';
import styled from 'styled-components';
import RightArrow from '@components/icons/RightArrow';

type ButtonContentsProps = {
  width?: string;
  height?: string;
  text?: string;
  onClick: (event: any) => void;
  children: React.ReactNode;
};

function TestButton(props: ButtonContentsProps): JSX.Element {
  const ButtonContainer = styled.button`
    width: ${props.width || '150px'};
    height: ${props.height || '40px'};
    border-radius: var(--button-radius);
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(4px);
    text-align: center;
    font-size: 14px;
    letter-spacing: 2px;
    color: var(--accent-0);
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    z-index:0;
    &:before {
    border-radius: var(--button-radius);
      content:"";
      width:100%;
      height:100%;
      position:absolute;
      z-index:-1;
      left:0;
      transition:0.5s;
      background: linear-gradient(135deg, var(--button-primary) 0%, var(--button-secondary) 100%);
    }
    &:after {
      content:"";
    border-radius: var(--button-radius);
      width:100%;
      height:100%;
      position:absolute;
      z-index:-2;
      left:0;
      transition:0.5s;
      background: linear-gradient(45deg, var(--button-secondary) 0%, var(--button-primary) 100%);
    }
    &:hover:before {
      opacity: 0;
    }
    &:active {
      box-shadow: 0 0px 0px rgba(0, 0, 0, 0.25);
      transition: all 0.2s 0s ease;
    }
  `;

  return (
    <>
      <ButtonContainer onClick={props.onClick}>
        {props.children}
        {props.text}
        <RightArrow height={16} width={16} color='var(--accent-0)' />
      </ButtonContainer>
    </>
  );
}

export default TestButton;
