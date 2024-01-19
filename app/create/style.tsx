import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 600px) {
    justify-content: flex-start;
    padding: 30px 0;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FormTitle = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 20px;
  font-weight: normal;
`;

export const RoomCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
`;
