import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Loader } from ".";

export default {
  title: "Atoms/Loader",
  component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Default = Template.bind({});

Default.args = {
  size: 48,
  strength: 600,
  color: "primary",
};
