import { Conditions } from './Conditions';

export default {
  title: 'components/Conditions',
  component: Conditions,
};

function Template(args) {
  return <Conditions {...args} />;
}

export const Default = Template.bind({});
Default.args = {

};
