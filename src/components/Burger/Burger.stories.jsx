import React from 'react';
import { Burger } from './Burger';

export default {
  title: 'components/Button/Burger',
  component: Burger,
};

function Template(args) {
  return <Burger {...args} />;
}

export const Default = Template.bind({});
Default.args = {
  onClick: () => {},
  isOpen: false,
};
