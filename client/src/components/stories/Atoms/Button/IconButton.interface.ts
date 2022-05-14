import { IconType } from "components/stories/Icons/Icon.interface";
import { PolymorphicComponentPropsWithRef } from "components/stories/types/Polymorphic.types";
import { BtnProps } from "./Button.interface";

type IconBtnProps = Omit<
  BtnProps,
  "spinnerPlacement" | "loadingText" | "children"
> & {
  icon: IconType;
};

export type Props<C extends React.ElementType = "button"> =
  PolymorphicComponentPropsWithRef<C, IconBtnProps>;
