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
import { useEffect, useState } from "react";
import OpenmojiReturn from "./icons/OpenmojiReturn";
import { useRouter } from "next/navigation";
import { getOfficeData, postOfficeData } from "../action";
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
  const [errorText, setErrorText] = useState("");
  const [errorModalText, setErrorModalText] = useState("");
  const [isSubmmited, setIsSubmmited] = useState(false);

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
            error={errorText !== ""}
            helperText={errorText}
            onChange={async (e) => {
              setErrorText("");
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
                setErrorText("");
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
          disabled={isSubmmited}
          onClick={async () => {
            if (id === "") {
              setErrorText("IDを入力してください");
              return;
            }
            const office = await getOfficeData(id);
            if (office !== null) {
              setErrorText("すでに存在するIDです");
              return;
            }
            if (rooms.length === 0) {
              setIsOpen(true);
              return;
            }
            setIsSubmmited(true);
            const roomData = [...rooms].map((room) => {
              return {
                roomType: room.roomType,
                name: room.roomName,
                capacity: translateToCapacity(room.roomType),
              };
            });
            postOfficeData({
              officeId: id,
              rooms: roomData,
            });
            alert("作成できました！");
            router.push("/");
          }}
        >
          作成
        </Button>
      </ButtonWrapper>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <ModalBox>
          <FormTitle>追加したい部屋を選択してください</FormTitle>
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
            error={errorModalText !== ""}
            helperText={errorModalText}
            onChange={(e) => {
              setErrorModalText("");
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
                  setErrorModalText("部屋名を入力してください");
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
