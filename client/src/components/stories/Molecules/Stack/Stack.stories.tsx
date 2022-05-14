import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Stack } from ".";
import { View } from "../../Atoms/View";

export default {
  title: "Molecules/Stack",
  component: Stack,
  subcomponents: { View },
} as ComponentMeta<typeof Stack>;

const ListTemplate: ComponentStory<typeof Stack> = (args) => {
  const { items } = args;
  return (
    <Stack gap="2">
      {items.map((item: number) => (
        <View backgroundColor="primary" strength={400}>
          {item}
        </View>
      ))}
    </Stack>
  );
};

export const Default = ListTemplate.bind({});
Default.args = { items: [1, 2, 3, 4] };
