import styled from "styled-components";
import { RoomType } from ".";

export const IconWrapper = styled.span`
  position: absolute;
`;

const Wrapper = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  img {
    transition-duration: 0.5s;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

export const RoomWrapper = styled(Wrapper)<{ roomType: RoomType }>`
  ${({ roomType }) =>
    roomType === "1" &&
    `
    width: 200px;
    height: 200px;
    .user-1 {
    top: 85px;
    left: 72px;
  }

  `}

  ${({ roomType }) =>
    roomType === "2" &&
    `
    width: 200px;
    height: 200px;
    .user-1 {
    top: 80px;
    left: 40px;
  }
  .user-2 {
    top: 80px;
    left: 110px;
  }

  `}

  ${({ roomType }) =>
    roomType === "3" &&
    `
    width: 200px;
    height: 200px;
    .user-1 {
    top: 54px;
    left: 16px;
  }
  .user-2 {
    top: 105px;
    left: 138px;
  }

  `}

  
  ${({ roomType }) =>
    roomType === "4" &&
    `
    width: 200px;
    height: 200px;
    .user-1 {
    top: 105px;
    left: 25px;
    }
    .user-2 {
      top: 50px;
      left: 130px;
    }
 
  `}

  ${({ roomType }) =>
    roomType === "5" &&
    `
    width: 200px;
    height: 200px;
    .user-1 {
      top: 30px;
      left: 45px;
    }
    .user-2 {
      top: 30px;
      left: 110px;
    }
    .user-3 {
      top: 125px;
      left: 113px;
    }
    .user-4 {
      top: 125px;
      left: 45px;
    }
 
  `}

  ${({ roomType }) =>
    roomType === "6" &&
    `    
    width: 300px;
    height: 300px;
    .user-1 {
        top: 62px;
        left: 40px;
    }
    .user-2 {
        top: 118px;
        left: 40px;
    }
    .user-3 {
       top: 176px;
       left: 40px;
    }
    .user-4 {
       top: 65px;
       left: 210px;
    }
    .user-5 {
        top: 120px;
        left: 210px;
    }
    .user-6 {
        top: 176px;
        left: 210px;
    }

`}
`;

export const RoomName = styled.span`
  position: absolute;
  z-index: 5;
  padding: 2px 8px;
  background-color: #fff;
  color: #00c;
  font-weight: bold;
  border-radius: 12px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
`;
