"use client";

import { RemoteVideoStream, RoomSubscription } from "@skyway-sdk/room";
import { FC, useEffect, useRef, useState } from "react";
import {
  ButtonWrapper,
  IconWrapper,
  LocalVideo,
  RemoteVideo,
  ToggleWrapper,
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
        <ButtonWrapper id="leave" onClick={() => router.push("/")}>
          <IconWrapper>
            <ImExit />
          </IconWrapper>
        </ButtonWrapper>
        <ButtonWrapper id="share" onClick={() => onShare(id)}>
          <IconWrapper>
            <LuScreenShare />
          </IconWrapper>
        </ButtonWrapper>
        <ToggleWrapper ref={videoToggleRef} isActive={!isVideoDisabled}>
          <IconWrapper>
            {isVideoDisabled ? <BiSolidVideo /> : <BiSolidVideoOff />}
          </IconWrapper>
        </ToggleWrapper>
        <ToggleWrapper ref={audioToggleRef} isActive={!isAudioDisabled}>
          <IconWrapper>
            {isAudioDisabled ? <BsFillMicFill /> : <BsFillMicMuteFill />}
          </IconWrapper>
        </ToggleWrapper>
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
