import { Box } from "@mui/material";
import { PropsWithChildren, ReactNode } from "react";
import styled from "styled-components";

export const ReturnButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 80%;
  align-items: center;
  justify-content: center;
  padding: 30px;
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

export const RoomSettingWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  flex-direction: column;
  gap: 10px;
  flex-wrap: wrap;
`;

export const AddRoomButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px;
`;

export const ModalBox = ({ children }: PropsWithChildren) => {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: "12px",
    p: 4,
  };
  return <Box sx={style}>{children}</Box>;
};
