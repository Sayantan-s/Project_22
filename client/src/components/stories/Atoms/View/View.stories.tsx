import { ComponentMeta, ComponentStory } from "@storybook/react";
import { View } from ".";

export default {
  title: "Atoms/View",
  component: View,
} as ComponentMeta<typeof View>;

const Template: ComponentStory<typeof View> = (args) => <View {...args} />;

export const Default = Template.bind({});

Default.args = {
  isParent: true,
  children: "Hey I'm a container",
};
