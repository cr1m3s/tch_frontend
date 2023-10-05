import { Congratulations } from './Congratulations';

export default {
  title: 'components/Congratulations',
  component: Congratulations,
};

function Template(args) {
  return <Congratulations {...args} />;
}

export const Default = Template.bind({});
Default.args = {

};
