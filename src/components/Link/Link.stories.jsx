import { Link } from './Link';

export default {
  title: 'components/Link',
  component: Link,
};

function Template(args) {
  return <Link {...args} />;
}

export const Default = Template.bind({});
Default.args = {
  to: '/',
  children: 'Link',
};
