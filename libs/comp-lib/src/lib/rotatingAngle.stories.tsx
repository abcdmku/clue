import type { Meta, StoryObj } from '@storybook/react';
import { RotatingArrow } from './rotatingAngle';

const meta: Meta<typeof RotatingArrow> = {
  component: RotatingArrow,
  title: 'RotatingArrow',
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Story />
      </div>
    ),
  ],
  
};
export default meta;
type Story = StoryObj<typeof RotatingArrow>;

export const Primary = {
  args: {},
};
