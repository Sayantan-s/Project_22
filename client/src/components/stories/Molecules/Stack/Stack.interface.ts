import { PolymorphicComponentPropsWithRef } from "components/stories/types/Polymorphic.types";
import { Colors, Strength } from "components/stories/types/Styles.types";

interface StackProps {
  gap?: "0" | "0.5" | "1" | "2" | "2.5" | "3.5" | string;
  direction?: "v" | "h";
  backgroundColor?: Colors;
  strength?: Strength;
}
export type Props<C extends React.ElementType = "div"> =
  PolymorphicComponentPropsWithRef<C, StackProps>;
