import { Logo } from './Logo';

export default {
  title: 'components/Logo',
  component: Logo,
};

function Template(args) {
  const { variant } = args;
  const darkStyle = { backgroundColor: '#07063D', padding: '32px' };
  return (
    <div style={variant === 'footer' ? darkStyle : null}>
      <Logo {...args} />
    </div>
  );
}

export function LogoComponent(args) {
  return <Template {...args} />;
}

export const Footer = Template.bind({});
Footer.args = {
  variant: 'footer',
};
