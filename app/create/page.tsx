"use client";

import { Button, Modal, TextField } from "@mui/material";
import {
  AddRoomButtonWrapper,
  ButtonWrapper,
  ContentWrapper,
  FormWrapper,
  ModalBox,
  ReturnButtonWrapper,
  RoomSettingWrapper,
  Wrapper,
} from "./style";
import { useState } from "react";
import OpenmojiReturn from "./icons/OpenmojiReturn";
import { useRouter } from "next/navigation";
import { postOfficeData } from "../action";

const Create = () => {
  const router = useRouter();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [rooms, setRooms] = useState([
    {
      roomType: "1",
      coount: 0,
    },
    {
      roomType: "2",

      coount: 0,
    },
    {
      roomType: "3",
      coount: 0,
    },
    {
      roomType: "4",

      coount: 0,
    },
    {
      roomType: "5",
      coount: 0,
    },
    {
      roomType: "6",

      coount: 0,
    },
  ]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <ContentWrapper>
        <ReturnButtonWrapper>
          <Button
            variant="outlined"
            startIcon={<OpenmojiReturn />}
            onClick={() => router.push("/")}
          >
            戻る
          </Button>
        </ReturnButtonWrapper>
        <FormWrapper>
          <TextField
            id="outlined-basic"
            label="Office ID"
            variant="outlined"
            size="small"
            onChange={(e) => setId(e.target.value)}
          />
        </FormWrapper>
        <RoomSettingWrapper>
          <AddRoomButtonWrapper>
            <Button
              variant="contained"
              type="submit"
              onClick={() => setIsOpen(true)}
            >
              部屋追加
            </Button>
          </AddRoomButtonWrapper>
        </RoomSettingWrapper>
      </ContentWrapper>
      <ButtonWrapper>
        <Button
          variant="contained"
          type="submit"
          onClick={async () => {
            await postOfficeData();
          }}
        >
          作成
        </Button>
      </ButtonWrapper>

      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <ModalBox></ModalBox>
      </Modal>
    </Wrapper>
  );
};

export default Create;
