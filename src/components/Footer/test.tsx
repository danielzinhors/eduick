// import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Footer from '.'

describe('<Footer />', () => {
  it('should render 4 column topics', () => {
    const { container } = renderWithTheme(<Footer />)

    // expect(screen.getByText(/footer/i)).toHaveStyle({
    //   color: '#200E64'
    // })

    expect(container.firstChild).toMatchSnapshot()
  })
})
