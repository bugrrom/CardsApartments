import React from "react";
import styled from "@emotion/styled";
import { ApartmentsScreen } from "../apartmentsScreen/ApartmentsScreen";

const Container = styled.div`
  background: rgb(131, 58, 180);
  background: linear-gradient(
    90deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(143, 7, 7, 1) 50%,
    rgba(252, 176, 69, 1) 100%
  );
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;

export const App = () => {
  return (
    <Container>
      <ApartmentsScreen />
    </Container>
  );
};
