import { AccentText } from "./AccentText";

export default {
  title: 'components/Texts/AccentText',
  component: AccentText,
  args: {
    children: "Accent text",
  },
};

function Template(args) {
  return <AccentText {...args} />;
}

export const Default = Template.bind({});
Default.args = {};
