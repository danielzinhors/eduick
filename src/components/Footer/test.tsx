import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import theme from 'styles/theme'

import Footer from '.'

describe('<Footer />', () => {
  it('should render background', () => {
    renderWithTheme(<Footer />)

    expect(screen.getByLabelText(/footer/i)).toHaveStyle({
      background: `${theme.colors.primary}`
    })
  })
})
