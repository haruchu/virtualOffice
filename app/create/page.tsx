"use client";

import { Button, Modal, TextField } from "@mui/material";
import {
  AddRoomButtonWrapper,
  ButtonWrapper,
  ContentWrapper,
  FocusRoom,
  FormTitle,
  FormWrapper,
  ModalBox,
  ReturnButtonWrapper,
  RoomSettingWrapper,
  RoomWrapper,
  SelectedRoomWrapper,
  Wrapper,
} from "./style";
import { useState } from "react";
import OpenmojiReturn from "./icons/OpenmojiReturn";
import { useRouter } from "next/navigation";
import { postOfficeData } from "../action";
import { Room, RoomType } from "../components/atoms/room";

type SettingRoomType = {
  roomType: RoomType;
  roomName: string;
};

const translateToCapacity = (roomType: RoomType) => {
  switch (roomType) {
    case "1":
      return 2;
    case "2":
      return 2;
    case "3":
      return 2;
    case "4":
      return 2;
    case "5":
      return 4;
    case "6":
      return 6;
  }
};

const Create = () => {
  const router = useRouter();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [rooms, setRooms] = useState<SettingRoomType[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [focusRoomType, setFocusRoomType] = useState<RoomType>("1");
  const [isError, setIsError] = useState(false);

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
            error={isError}
            onChange={(e) => {
              setIsError(false);
              setId(e.target.value);
            }}
          />
        </FormWrapper>
        <RoomSettingWrapper>
          <AddRoomButtonWrapper>
            <Button
              variant="contained"
              type="submit"
              onClick={() => {
                setIsError(false);
                setIsOpen(true);
              }}
            >
              部屋追加
            </Button>
          </AddRoomButtonWrapper>
          <SelectedRoomWrapper>
            {rooms.map((room) => (
              <Room
                key={room.roomType}
                roomType={room.roomType}
                roomName={room.roomName}
                memberImages={[]}
              />
            ))}
          </SelectedRoomWrapper>
        </RoomSettingWrapper>
      </ContentWrapper>
      <ButtonWrapper>
        <Button
          variant="contained"
          type="submit"
          onClick={async () => {
            if (id === "") {
              setIsError(true);
              return;
            }
            const roomData = [...rooms].map((room) => {
              return {
                roomType: room.roomType,
                name: room.roomName,
                capacity: translateToCapacity(room.roomType),
              };
            });
            await postOfficeData({
              officeId: id,
              rooms: roomData,
            });
          }}
        >
          作成
        </Button>
      </ButtonWrapper>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <ModalBox>
          <FormTitle>部屋のタイプを選択してください</FormTitle>
          <RoomWrapper>
            {[...Array(6).keys()].map((i) => (
              <FocusRoom isFocus={focusRoomType == String(i + 1)} key={i}>
                <Room
                  roomType={String(i + 1) as RoomType}
                  memberImages={[]}
                  onClick={() => setFocusRoomType(String(i + 1) as RoomType)}
                  isDisplay
                />
              </FocusRoom>
            ))}
          </RoomWrapper>
          <TextField
            id="outlined-basic"
            label="部屋名"
            variant="outlined"
            size="small"
            error={isError}
            onChange={(e) => {
              setIsError(false);
              setName(e.target.value);
            }}
          />
          <ButtonWrapper>
            <Button variant="outlined" onClick={() => setIsOpen(false)}>
              キャンセル
            </Button>
            <Button
              variant="contained"
              type="submit"
              onClick={() => {
                if (name === "") {
                  setIsError(true);
                  return;
                }
                let a: SettingRoomType[] = [...rooms];
                a.push({ roomType: focusRoomType, roomName: name });
                setRooms(a);
                setIsOpen(false);
              }}
            >
              確定
            </Button>
          </ButtonWrapper>
        </ModalBox>
      </Modal>
    </Wrapper>
  );
};

export default Create;
