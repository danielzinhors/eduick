import styled, { css } from 'styled-components'
import { LogoProps } from '.'

const wrapperModifiers = {
  normal: () => css`
    width: 34.5rem;
    height: 3.3rem;
  `,

  large: () => css`
    width: 66.79rem;
    height: 5.9rem;
  `
}

export const Wrapper = styled.div<LogoProps>`
  ${({ size }) => css`
    ${!!size && wrapperModifiers[size]};
  `}
`
