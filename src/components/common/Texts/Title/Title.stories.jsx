import { Title } from "./Title";

export default {
  title: 'components/Texts/Title',
  component: Title,
  args: {
    children: "Title text",
  },
};

function Template(args) {
  return <Title {...args} />;
}

export const Default = Template.bind({});
Default.args = {};
