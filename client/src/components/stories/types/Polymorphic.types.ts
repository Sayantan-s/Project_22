import React from "react";

export interface PassComponentType<E extends React.ElementType> {
  as?: E;
}

type PropsToOmit<C extends React.ElementType, P> = keyof (PassComponentType<C> &
  P);

export type PolymorphicComponentProps<
  C extends React.ElementType,
  Props = {},
> = React.PropsWithChildren<Props & PassComponentType<C>> &
  Omit<React.ComponentProps<C>, PropsToOmit<C, Props>>;

export type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>["ref"];

export type PolymorphicComponentPropsWithRef<
  C extends React.ElementType,
  Props = {},
> = PolymorphicComponentProps<C, Props> & { ref?: PolymorphicRef<C> };

export type NoUndefinedField<T> = {
  [P in keyof T]-?: NoUndefinedField<NonNullable<T[P]>>;
};
