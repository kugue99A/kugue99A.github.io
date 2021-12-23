import React from "react";
import styled from "styled-components";

type LayoutProps = {
  children: React.ReactNode;
};

function LoginLayout({ children }: LayoutProps): JSX.Element {
  const Container = styled.main`
    height: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    padding: 0px 200px;
  `;

  return (
    <>
      <Container>{children}</Container>
    </>
  );
}

export default LoginLayout;
