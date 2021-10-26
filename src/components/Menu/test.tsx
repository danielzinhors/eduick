import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
  })

  it('should handle the open/close mobile menu', () => {
    renderWithTheme(<Menu />)
    //TDD create
    //selecionar o nosso Menufull
    const fullMenuElement = screen.getByRole('navigation', { hidden: true })
    //verificar se o menu ta escondido
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
    //clicar no botao de abrir o menu e verificar se ele abriu
    fireEvent.click(screen.getByLabelText(/open menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })
    //clicar no botao de fechar o menu e verificar se ele fechou
    fireEvent.click(screen.getByLabelText(/close menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })

  it('shold show register box when logged out', () => {
    renderWithTheme(<Menu />)
    // expect(screen.queryByText(/My profile/i)).not.toBeInTheDocument()
    // expect(screen.queryByText(/Wishilist/i)).not.toBeInTheDocument()
    expect(screen.getAllByText(/How it works/i)).toHaveLength(2)
    expect(screen.getAllByText(/About Us/i)).toHaveLength(2)
  })
})
