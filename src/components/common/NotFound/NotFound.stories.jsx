import { NotFound } from './NotFound';

export default {
  title: 'components/NotFound',
  component: NotFound,
};

function Template(args) {
  return <NotFound {...args} />;
}

export const Default = Template.bind({});
Default.args = {

};
