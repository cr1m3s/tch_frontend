import { Text } from "./Text";

export default {
  title: 'components/Texts/Text',
  component: Text,
  args: {
    children: "Text text",
  },
};

function Template(args) {
  return <Text {...args} />;
}

export const Default = Template.bind({});
Default.args = {};
