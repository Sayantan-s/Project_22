import {
  Play,
  ClickPhoto,
  Stop,
  CameraOff,
  CameraOn,
} from "./components/stories/Icons/solid";
import { useEffect, useRef, useState } from "react";
import { IconButton, Stack, View } from "stories";
import styled from "styled-components";

interface CameraConfig {
  status: "ready" | "loading" | "failed" | "initial" | "closed";
  errorText: string | "Failed to start" | "User did'nt allow camera";
}

function App() {
  const [isCameraOpen, setIsCameraOpen] = useState<boolean>(false);
  const [isRecording, setRecording] = useState<boolean>(false);
  const [videoStream, setVideoStream] = useState<CameraConfig>({
    status: "initial",
    errorText: "",
  });
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);

  const videoRef = useRef<HTMLVideoElement>(null);
  const cameraCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    navigator.getUserMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia;
  }, []);

  useEffect(() => {
    handleStartCamera();
  }, []);

  const handleStartCamera = () => {
    if (videoStream.status === "ready" || videoStream.status === "loading") {
      return;
    }
    setVideoStream((prevState) => ({ ...prevState, status: "loading" }));
    navigator.getUserMedia(
      {
        audio: false,
        video: {
          width: 700,
          height: 400,
        },
      },
      (stream) => {
        if (!isCameraOpen) {
          let video = videoRef.current!;
          video.srcObject = stream;
          setLocalStream(stream);
          setIsCameraOpen(true);
          video.onloadedmetadata = () => {
            setVideoStream((prevState) => ({ ...prevState, status: "ready" }));
            setTimeout(() => video.play(), 0);
          };
        }
      },
      (err) => {
        setVideoStream((prevState) => ({
          ...prevState,
          status: "failed",
          errorText: err.message || "Failed to start",
        }));
      },
    );
  };

  const handleRecordAndDetect = () => {
    setRecording((prevState) => !prevState);
  };

  const handleCameraToggle = () => {
    const videoTrack = localStream
      ?.getTracks()
      .find((track) => track.kind === "video")!;
    if (videoTrack.enabled) {
      videoTrack.enabled = false;
      setIsCameraOpen(false);
      return;
    }
    videoTrack.enabled = true;
    setIsCameraOpen(true);
  };

  const handleCaptureCanvasPhoto = () => {
    const canvas = cameraCanvasRef.current!;
    canvas
      .getContext("2d")
      ?.drawImage(videoRef.current!, 0, 0, canvas.width, canvas.height);

    const base64ImageDataUrl = canvas.toDataURL("image/webp");

    console.log(base64ImageDataUrl);
  };

  return (
    <View isParent>
      <VideoPlayer>
        <Video autoPlay ref={videoRef} />
        <Canvas as="canvas" ref={cameraCanvasRef} />
        <PlayerControls backgroundColor="primary" glass>
          <IconButton
            icon={isRecording ? Stop : Play}
            size="xs"
            rounded="full"
            variant="gradient"
            onClick={handleRecordAndDetect}
          />
          {!isRecording && (
            <IconButton
              icon={ClickPhoto}
              size="xs"
              rounded="full"
              variant="gradient"
              onClick={handleCaptureCanvasPhoto}
            />
          )}
          <IconButton
            icon={isCameraOpen ? CameraOff : CameraOn}
            size="xs"
            rounded="full"
            variant="gradient"
            onClick={handleCameraToggle}
          />
        </PlayerControls>
      </VideoPlayer>
    </View>
  );
}

export default App;

const VideoPlayer = styled(View)`
  position: relative;
  overflow: hidden;
  width: 70rem;
  height: 40rem;
  border-radius: 2rem;
`;

const Canvas = styled(View)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
`;

const PlayerControls = styled(Stack)`
  position: absolute;
  margin: 0 auto;
  bottom: 1.5rem;
  left: 1.5rem;
  padding: 0.8rem;
  border-radius: 5rem;
`;

const Video = styled.video`
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
`;
