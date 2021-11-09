import { Story, Meta } from '@storybook/react/types-6-0'
import Card, { CardProps } from '.'

export default {
  title: 'Card',
  component: Card,
  args: {
    slug: 'master_english_improve_your_speaking',
    title: 'Master English: Improve Your Speaking',
    star: 3,
    img: '/img/curse.png',
    qtdlessons: 3
  }
} as Meta

export const Default: Story<CardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <Card {...args} />
  </div>
)
