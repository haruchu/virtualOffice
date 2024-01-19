import { IconButton } from "@mui/material";
import { Room, RoomType } from "../room";
import { ButtonWrapper, CountBudge, Detail, Wrapper } from "./style";
import MaterialSymbolsAdd from "./icons/MaterialSymbolsAdd";
import IcBaselineMinus from "./icons/IcBaselineMinus";

type RoomCardProps = {
  roomType: RoomType;
  count: number;
  updateCount: (count: number) => void;
};

const capacityText = (roomType: RoomType) => {
  switch (roomType) {
    case "1":
      return "1人";
    case "2":
      return "2人";
    case "3":
      return "2人";
    case "4":
      return "2人";
    case "5":
      return "4人";
    case "6":
      return "6人";
  }
};

export const RoomCard = ({ count, roomType, updateCount }: RoomCardProps) => {
  return (
    <Wrapper>
      <CountBudge>{count}</CountBudge>
      <Room roomType={roomType} memberImages={[]} isDisplay />
      <Detail>最大人数：{capacityText(roomType)}</Detail>
      <ButtonWrapper>
        <IconButton
          onClick={() => updateCount(count - 1)}
          disabled={count === 0}
        >
          <IcBaselineMinus />
        </IconButton>
        <IconButton onClick={() => updateCount(count + 1)}>
          <MaterialSymbolsAdd />
        </IconButton>
      </ButtonWrapper>
    </Wrapper>
  );
};
