import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    renderWithTheme(<Heading>EDUICK</Heading>)

    expect(screen.getByRole('heading', { name: /EDUICK/i })).toHaveStyle({
      color: '#FFFFFF'
    })
  })

  it('should render a black heading when color is passed', () => {
    renderWithTheme(<Heading color="black">EDUICK</Heading>)

    expect(screen.getByRole('heading', { name: /EDUICK/i })).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a heading with a line to the left side', () => {
    renderWithTheme(<Heading lineLeft>EDUICK</Heading>)

    expect(screen.getByRole('heading', { name: /EDUICK/i })).toHaveStyle({
      'border-left': '0.7rem solid #200E64'
    })
  })

  it('should render a heading with a line to the bottom', () => {
    renderWithTheme(<Heading lineBottom>EDUICK</Heading>)

    expect(screen.getByRole('heading', { name: /EDUICK/i })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #200E64',
      {
        modifier: '::after'
      }
    )
  })

  it('should render a heading with a small size', () => {
    renderWithTheme(<Heading size="small">EDUICK</Heading>)
    expect(screen.getByRole('heading', { name: /EDUICK/i })).toHaveStyle({
      'font-size': '1.6rem'
    })

    expect(screen.getByRole('heading', { name: /EDUICK/i })).toHaveStyleRule(
      'width',
      '3rem',
      {
        modifier: '::after'
      }
    )
  })

  it('should render a heading with a huge size', () => {
    renderWithTheme(<Heading size="huge">EDUICK</Heading>)
    expect(screen.getByRole('heading', { name: /EDUICK/i })).toHaveStyle({
      'font-size': '5.2rem'
    })
  })

  it('should render a Heading with a primary line color', () => {
    renderWithTheme(
      <Heading lineColor="primary" lineLeft lineBottom>
        Lorem Ipsum
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /lorem ipsum/i })
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #200E64' })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #200E64', {
      modifier: '::after'
    })
  })

  it('should render a Heading with a secondary line color', () => {
    renderWithTheme(
      <Heading lineColor="secondary" lineLeft lineBottom>
        Lorem Ipsum
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /lorem ipsum/i })
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #FFD74F' })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #FFD74F', {
      modifier: '::after'
    })
  })
})
