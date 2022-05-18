import { useTheme } from "styled-components";
import { IconType } from "../Icon.interface";

export const Pause: IconType = ({ size = "24", color, strength }) => {
  const { colors } = useTheme();
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.75 3C9.75 2.58579 9.41421 2.25 9 2.25C8.58579 2.25 8.25 2.58579 8.25 3V21C8.25 21.4142 8.58579 21.75 9 21.75C9.41421 21.75 9.75 21.4142 9.75 21L9.75 3Z"
        fill={colors[color][strength!]}
      />
      <path
        d="M15.75 3C15.75 2.58579 15.4142 2.25 15 2.25C14.5858 2.25 14.25 2.58579 14.25 3L14.25 21C14.25 21.4142 14.5858 21.75 15 21.75C15.4142 21.75 15.75 21.4142 15.75 21L15.75 3Z"
        fill={colors[color][strength!]}
      />
    </svg>
  );
};
