import "styled-components";
import { CSSObject, CSSProp } from "styled-components";
import { theme } from "./src/components/theme/theme";
declare module "styled-components" {
  export type Theme = typeof theme;
  export interface DefaultTheme extends Theme {}
}

declare module "react" {
  interface DOMAttributes<T> {
    css?: CSSProp;
  }
}
declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      css?: CSSProp;
    }
  }
}
