import { screen } from '@testing-library/react'
import cursesMock from 'components/Card/mock'
import { renderWithTheme } from 'utils/tests/helpers'
import Dashboard from '.'

jest.mock('components/Card', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Card" />
  }
}))

describe('<Dashboard />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Dashboard curses={[cursesMock[0]]} />)
    expect(screen.getByTestId('Mock Card')).toBeInTheDocument()
  })
})
