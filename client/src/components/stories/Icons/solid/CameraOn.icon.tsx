import { useTheme } from "styled-components";
import { IconType } from "../Icon.interface";

export const CameraOn: IconType = ({ size = "24", color, strength }) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.03356 3.25H8.96644C7.59473 3.25 6.51928 3.24999 5.65494 3.32061C4.7748 3.39252 4.04769 3.54138 3.38955 3.87671C2.30762 4.42798 1.42798 5.30762 0.876713 6.38955C0.541379 7.04769 0.392522 7.7748 0.320612 8.65494C0.249992 9.51928 0.249996 10.5947 0.25 11.9664V12.0336C0.249996 13.4053 0.249992 14.4807 0.320612 15.3451C0.392522 16.2252 0.541379 16.9523 0.876713 17.6104C1.42798 18.6924 2.30762 19.572 3.38955 20.1233C4.04769 20.4586 4.77479 20.6075 5.65494 20.6794C6.51921 20.75 7.59454 20.75 8.96608 20.75H9.03358C10.4051 20.75 11.4808 20.75 12.3451 20.6794C13.2252 20.6075 13.9523 20.4586 14.6104 20.1233C15.6924 19.572 16.572 18.6924 17.1233 17.6104C17.1733 17.5123 17.2192 17.4125 17.2613 17.3109C18.428 17.8206 19.3834 18.2344 20.159 18.4448C20.9839 18.6686 21.7874 18.7147 22.5057 18.2446C23.2241 17.7746 23.5036 17.0198 23.6288 16.1743C23.7501 15.3556 23.75 14.2757 23.75 12.9502V11.0498C23.75 9.72426 23.7501 8.64436 23.6288 7.82567C23.5036 6.98019 23.2241 6.2254 22.5057 5.75537C21.7874 5.28534 20.9839 5.33144 20.159 5.55522C19.3834 5.76561 18.428 6.17938 17.2613 6.68909C17.2192 6.58748 17.1733 6.48774 17.1233 6.38955C16.572 5.30762 15.6924 4.42798 14.6104 3.87671C13.9523 3.54138 13.2252 3.39252 12.3451 3.32061C11.4807 3.24999 10.4053 3.25 9.03356 3.25ZM5 8.25C4.58579 8.25 4.25 8.58579 4.25 9C4.25 9.41421 4.58579 9.75 5 9.75H9C9.41421 9.75 9.75 9.41421 9.75 9C9.75 8.58579 9.41421 8.25 9 8.25H5Z"
        fill={colors[color][strength!]}
      />
    </svg>
  );
};