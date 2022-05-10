import { ViewAtom } from "./View.Interface";
import { ComponentView, ComponentStack } from "./View.styles";

export const View: ViewAtom = ({ isParent = false, ...rest }) => (
  <ComponentView isParent={isParent} {...rest} />
);

View.Stack = ({ gap = "1", ...rest }) => <ComponentStack {...rest} />;
