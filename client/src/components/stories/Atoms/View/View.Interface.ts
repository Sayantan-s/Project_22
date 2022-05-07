import { PolymorphicComponentProps } from "components/stories/types/Polymorphic.types";

interface ViewProps {
  isParent: boolean;
}

export type Props<C extends React.ElementType = "button"> =
  PolymorphicComponentProps<C, ViewProps>;
