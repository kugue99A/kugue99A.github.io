import React from "react";
import styled from "styled-components";

type TableContentsProps = {
  width?: string
  height?: string
  align?: string
  justify?: string
  children: React.ReactNode;
};

function Table(props: TableContentsProps): JSX.Element {
  const TableContainer = styled.table`
    width: ${props.width};
    height: ${props.height};
    border: none;
    border-bottom: 1px solid #efefef;
    flex-grow: 1;
    display: flex;
    flex-flow: column;
    align-items: ${props.align || "start"};
    justify-content: ${props.justify || "start"};
    font-size: 16px;
  `;

  return (
    <>
      <TableContainer>{ props.children }</TableContainer>
    </>
  );
}

export default Table;
