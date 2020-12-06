import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { Apartment } from "./apartment/Apartment";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllApartments } from "./action";
import { AppState } from "../../init/rootReducer";

const Container = styled.div`
  margin-top: 50px;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const ApartmentsScreen = () => {
  const dispatch = useDispatch();
  const { allApartments } = useSelector((state: AppState) => state.apartment);
  useEffect(() => {
    dispatch(fetchAllApartments());
  }, []);
  return (
    <Container>
      {allApartments.map((el) => (
        <Apartment key={el.id} attr={el.attributes} rel={el.relationships} />
      ))}
    </Container>
  );
};
