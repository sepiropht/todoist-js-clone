import React from "react";
import styled from "styled-components";

const ToolBar = styled.div`
  position: fixed;
  width: 100%;
  height: 50px;
  top: 0;
  background-color: red;
`;
const Container = styled.div`
  width: auto;
  font-size: 13px;
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 0 !important;
`;
export default () => (
  <Container>
    <ToolBar />
  </Container>
);
