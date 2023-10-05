import { LinkHeader, ButtonLink } from './Link';

export default {
  title: 'components/Link',
  component: LinkHeader,
};

const LinkHeaderTemplate = (args) => <LinkHeader {...args} />;
export const LinkHeaderStory = LinkHeaderTemplate.bind({});

LinkHeaderStory.args = {
  to: '/your-path',
  children: 'Your LinkHeader Text',
};

const ButtonLinkTemplate = (args) => <ButtonLink {...args} />;
export const ButtonLinkStory = ButtonLinkTemplate.bind({});

ButtonLinkStory.args = {
  to: '/your-path',
  children: 'Your ButtonLink Text',
};
