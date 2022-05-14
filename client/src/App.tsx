import { Play, ClickPhoto, Stop } from "./components/stories/Icons/solid";
import { useEffect, useRef, useState } from "react";
import { IconButton, Stack, View } from "stories";
import styled from "styled-components";

interface CameraConfig {
  status: "ready" | "loading" | "failed" | "initial" | "closed";
  errorText: string | "Failed to start" | "User did'nt allow camera";
}

function App() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cameraCanvasRef = useRef<HTMLCanvasElement>(null);

  const [camera, setCamera] = useState<CameraConfig>({
    status: "initial",
    errorText: "",
  });

  const [isRecording, setRecording] = useState<boolean>(false);

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
    if (camera.status === "ready" || camera.status === "loading") {
      return;
    }
    setCamera((prevState) => ({ ...prevState, status: "loading" }));
    navigator.getUserMedia(
      {
        audio: false,
        video: {
          width: 700,
          height: 400,
        },
      },
      (stream) => {
        let video = videoRef.current!;
        video.srcObject = stream;
        video.onloadedmetadata = () => {
          setCamera((prevState) => ({ ...prevState, status: "ready" }));
          setTimeout(() => video.play(), 0);
        };
      },
      (err) => {
        setCamera((prevState) => ({
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

  const CaptureCanavasPhoto = () => {
    const canvas = cameraCanvasRef.current!;
    canvas
      .getContext("2d")
      ?.drawImage(videoRef.current!, 0, 0, canvas.width, canvas.height);

    const base64ImageDataUrl = canvas.toDataURL("image/webp");
    console.log(base64ImageDataUrl);
  };

  return (
    <View isParent display="flex" alignItems="center" justify="center">
      <VideoPlayer>
        <View as="video" autoplay ref={videoRef} />
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
              onClick={CaptureCanavasPhoto}
            />
          )}
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
`;

const PlayerControls = styled(Stack)`
  position: absolute;
  margin: 0 auto;
  bottom: 1rem;
  left: 1rem;
  padding: 0.8rem;
  border-radius: 5rem;
`;
