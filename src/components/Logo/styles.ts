import styled, { css } from 'styled-components'
import { LogoProps } from '.'

const wrapperModifiers = {
  small: () => css`
    width: 10rem;
    height: 3.3rem;
  `,

  normal: () => css`
    width: 34.5rem;
    height: 3.3rem;
  `,

  large: () => css`
    width: 66.79rem;
    height: 5.9rem;
  `
}

export const Wrapper = styled.div<Pick<LogoProps, 'size'>>`
  ${({ size }) => css`
    ${!!size && wrapperModifiers[size]};
  `}
`
export const Img = styled.img`
  max-width: 100%;
`
