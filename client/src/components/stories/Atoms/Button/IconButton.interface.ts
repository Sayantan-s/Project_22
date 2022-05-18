import { IconType } from "components/stories/Icons/Icon.interface";
import { PolymorphicComponentPropsWithRef } from "components/stories/types/Polymorphic.types";
import { TraditionalTypes } from "components/stories/types/Styles.types";
export interface IconBtnProps extends TraditionalTypes {
  icon: IconType;
}

export type Props<C extends React.ElementType = "button"> =
  PolymorphicComponentPropsWithRef<C, IconBtnProps>;
