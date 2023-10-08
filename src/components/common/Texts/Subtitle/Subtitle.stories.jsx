import { Subtitle } from "./Subtitle";

export default {
  title: 'components/Texts/Subtitle',
  component: Subtitle,
  args: {
    children: "Subtitle text",
  },
};

function Template(args) {
  return <Subtitle {...args} />;
}

export const Default = Template.bind({});
Default.args = {};
