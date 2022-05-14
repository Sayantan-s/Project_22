import { useEffect, useRef, useState } from "react";
import { View } from "stories";
import styled from "styled-components";

interface CameraConfig {
  status: "ready" | "loading" | "failed" | "initial" | "closed";
  errorText: string | "Failed to start" | "User did'nt allow camera";
}

function App() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [camera, setCamera] = useState<CameraConfig>({
    status: "initial",
    errorText: "",
  });

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

  return (
    <View isParent>
      <VideoPlayer>
        <View as="video" autoplay ref={videoRef} />
        <Canvas as="canvas" />
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
`;
