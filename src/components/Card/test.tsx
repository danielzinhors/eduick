import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Card from '.'

const props = {
  slug: 'master_english_improve_your_speaking',
  title: 'Master English: Improve Your Speaking',
  star: 3,
  img: '/img/curse.png',
  qtdlessons: 3
}

describe('<Card />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Card {...props} />)
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )
  })
})
