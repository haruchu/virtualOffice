import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.25);
  gap: 10px;
  border-radius: 12px;
  position: relative;

  & img {
    width: 200px;
    height: 200px;
  }
`;

export const CountBudge = styled.div`
  width: 20px;
  height: 20px;
  text-align: center;
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #e74c3c;
  color: white;
  padding: 5px;
  border-radius: 50%;
`;

export const Detail = styled.p`
  margin: 0;
  padding: 8px;
  font-size: 14px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
