import { View } from "../../Atoms/View";
import { useEffect, useRef, useState } from "react";
import { Props } from "./Timer.interface";
import { Stack } from "../../Molecules/Stack";

const Timer = ({ seconds, show = true }: Props) => {
  const [timer, setTimer] = useState<number>(seconds);

  const timerRef = useRef<NodeJS.Timeout | null>(null!);

  const handleCountDown = () => setTimer((prevState) => prevState - 1);

  useEffect(() => {
    if (timer) timerRef.current = setTimeout(handleCountDown, 1000);
    return () => clearTimeout(timerRef.current!);
  }, [timer]);

  if (timer > 10) throw new Error("Record timer should'nt exceed 10 seconds");

  return show ? (
    <Stack>
      <View>00 : 00 : {timer < 10 ? "0" + timer : timer}</View>
    </Stack>
  ) : null;
};

export default Timer;
