import  Form  from '.';

export default {
  title: 'Example/Form',
  component: Form,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export const Income = {
  args: {
    form: {
      onChange: () => {},
    },
  },
};

