import { Logo } from './Logo';

export default {
  title: 'components/Logo',
  component: Logo,
};

function Template(args) {
  const { variant } = args;
  const darkStyle = { backgroundColor: '#0D5D74', padding: '32px' };
  return (
    <div style={variant === 'footer' ? darkStyle : null}>
      <Logo {...args} />
    </div>
  );
}

export function LogoComponent(args) {
  return <Template {...args} />;
}

