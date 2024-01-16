"use client";

import { RemoteVideoStream, RoomSubscription } from "@skyway-sdk/room";
import { FC, useEffect, useRef, useState } from "react";
import {
  IconWrapper,
  LocalVideo,
  RemoteVideo,
  VideoContent,
  Wrapper,
  RoomName,
  ToolsWrapper,
} from "./style";
import { init, onShare } from "./main";
import { ImExit } from "react-icons/im";
import { LuScreenShare } from "react-icons/lu";
import { BiSolidVideoOff, BiSolidVideo } from "react-icons/bi";
import { BsFillMicFill, BsFillMicMuteFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { IconButton } from "@mui/material";

const Room = ({ params }: { params: { roomId: string } }) => {
  const audioContainerRef = useRef<HTMLDivElement>(null);
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const videoToggleRef = useRef<HTMLButtonElement>(null);
  const audioToggleRef = useRef<HTMLButtonElement>(null);
  const [videoSubscriptions, setVideoSubscriptions] = useState<
    RoomSubscription<RemoteVideoStream>[]
  >([]);
  const [isVideoDisabled, setIsVideoDisabled] = useState(true);
  const [isAudioDisabled, setIsAudioDisabled] = useState(true);
  const id = params.roomId;
  const router = useRouter();

  useEffect(() => {
    init(
      // TODO：オブジェクトにしたい
      id,
      localVideoRef,
      audioContainerRef,
      videoToggleRef,
      audioToggleRef,
      setVideoSubscriptions,
      (value: boolean) => setIsVideoDisabled(value),
      (value: boolean) => setIsAudioDisabled(value)
    );
  }, [id]);

  return (
    <Wrapper>
      <RoomName>ルーム名: {id}</RoomName>
      <VideoContent memberCount={videoSubscriptions.length + 1}>
        <LocalVideo ref={localVideoRef} isVideoEnabled={isVideoDisabled} />
        {videoSubscriptions.map((subscription) => (
          <Video key={subscription.id} subscription={subscription} />
        ))}
      </VideoContent>
      <div ref={audioContainerRef} />
      <ToolsWrapper>
        <IconButton
          id="leave"
          size="large"
          color="inherit"
          onClick={() => router.push("/")}
        >
          <IconWrapper>
            <ImExit />
          </IconWrapper>
        </IconButton>
        <IconButton
          id="share"
          size="large"
          color="inherit"
          onClick={() => onShare(id)}
        >
          <IconWrapper>
            <LuScreenShare />
          </IconWrapper>
        </IconButton>
        <IconButton
          size="large"
          ref={videoToggleRef}
          color={isVideoDisabled ? "inherit" : "error"}
        >
          <IconWrapper>
            {isVideoDisabled ? <BiSolidVideo /> : <BiSolidVideoOff />}
          </IconWrapper>
        </IconButton>
        <IconButton
          id={id}
          size="large"
          ref={audioToggleRef}
          color={isAudioDisabled ? "inherit" : "error"}
        >
          <IconWrapper>
            {isAudioDisabled ? <BsFillMicFill /> : <BsFillMicMuteFill />}
          </IconWrapper>
        </IconButton>
      </ToolsWrapper>
    </Wrapper>
  );
};

const Video: FC<{
  subscription: RoomSubscription<RemoteVideoStream>;
}> = ({ subscription }) => {
  const ref = useRef<HTMLVideoElement>(null);
  const [isLarge, setLarge] = useState(false);

  useEffect(() => {
    ref.current!.srcObject = new MediaStream([subscription.stream!.track]);
  }, [subscription.stream]);

  return (
    <>
      {/* disabledによって表示切替 */}
      <RemoteVideo
        autoPlay
        playsInline
        ref={ref}
        isLarge={isLarge}
        onClick={() => setLarge(!isLarge)}
      />
    </>
  );
};

export default Room;
