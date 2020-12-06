import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  width: 560px;
  min-height: 300px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 4px;
  margin: 20px;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  @media (max-width: 1330px) {
    width: 80%;
  }
  @media (max-width: 600px) {
    width: 95%;
  }
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1330px) {
    width: 100%;
    padding: 10px;
  }
`;

export const Images = styled.div`
  background: red;
  width: 270px;
  height: 200px;
  @media (max-width: 1330px) {
    width: 500px;
    height: 250px;
  }
  @media (max-width: 600px) {
    width: 100%;
    height: 200px;
    margin: 10px 0;
  }
`;

export const InfoCard = styled.div`
  width: 240px;
  margin-bottom: 10px;
  @media (max-width: 600px) {
    width: 100%;
    margin: 0 10px 10px 10px;
  }
`;

export const Like = styled.div`
  display: flex;
  justify-content: center;
  width: 40px;
  padding: 5px;
  border 1px solid rgba(55, 245, 131, 1);
  align-items: center;
  background: rgba(55, 245, 131, 0.8);
  margin-top: 20px;
  border-radius: 5px;
  cursor: pointer;
`;

export const UnLike = styled.div`
  display: flex;
  justify-content: center;
  width: 40px;
  padding: 5px;
  border 1px solid rgba(0, 0, 0, 0.3);
  align-items: center;
  background: rgba(0, 0, 0, 0);
  margin-top: 20px;
  border-radius: 5px;
  cursor: pointer;
`;
