import { Navigation } from './Navigation';

export default {
  title: 'components/Navigation',
  component: Navigation,
};

function Template(args) {
  return <Navigation {...args} />;
}

export const Default = Template.bind({});
Default.args = {

};
