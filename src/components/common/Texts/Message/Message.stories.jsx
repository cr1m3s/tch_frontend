import { Message } from "./Message";

export default {
  title: 'components/Texts/Message',
  component: Message,
  args: {
    children: "Message text",
  },
};

function Template(args) {
  return <Message {...args} />;
}

export const Default = Template.bind({});
Default.args = {};
