import { ComponentMeta, ComponentStory } from "@storybook/react";
import Heading from ".";

export default {
  title: "Atoms/Heading",
  component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const Default = Template.bind({});

Default.args = {
  level: "1",
  as: "h1",
  children: "There was a brown crow.",
  color: "neutral",
  strength: 200,
};
