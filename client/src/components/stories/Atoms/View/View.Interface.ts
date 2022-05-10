import { PolymorphicComponentProps } from "components/stories/types/Polymorphic.types";
import { Colors } from "components/stories/types/Styles.types";

interface ViewProps {
  isParent?: boolean;
  backgroundColor?: Colors;
}

interface StackProps {
  gap?: "0" | "0.5" | "1" | "2" | "2.5" | "3.5" | string;
  direction?: "v" | "h";
}

export type VProps<C extends React.ElementType = "div"> =
  PolymorphicComponentProps<C, ViewProps>;

export type SProps<C extends React.ElementType = "div"> =
  PolymorphicComponentProps<C, StackProps>;

type ViewFC = <C extends React.ElementType = "div">(
  props: VProps<C>,
) => JSX.Element;

export interface ViewAtom extends ViewFC {
  Stack?: <C extends React.ElementType = "div">(
    props: SProps<C>,
  ) => JSX.Element;
}
