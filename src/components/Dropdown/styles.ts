import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Title = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors.white};
    position: relative;
    display: flex;
    align-items: center;
    padding-right: 2.4rem;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background: ${theme.colors.white};
    color: ${theme.colors.black};
    margin-top: ${theme.spacings.small};
    position: absolute;
    ${media.lessThan('medium')`
      width: 360px;
      margin-top: 16px;
    `}
    right: -15px;
  `}
`

type WrapperProps = {
  isOpen?: boolean
}

const wrapperModifiers = {
  open: () => css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
    transform: translateY(-2rem);
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, isOpen }) => css`
    position: relative;
    width: max-content;
    ${Content} {
      transition: transform 0.2s ease-in, opacity ${theme.transition.default};
      ${isOpen && wrapperModifiers.open()}
      ${!isOpen && wrapperModifiers.close()}
    }
    ${isOpen &&
    `&::before {
          content: '';
          position: absolute;
          border-right: 1rem solid transparent;
          border-left: 1rem solid transparent;
          border-bottom: 1rem solid ${theme.colors.black};
          top: 2rem;
          right: 7rem;
        }`}
    ${!isOpen &&
    `&::before {
          content: '';
          position: absolute;
          border-right: 1rem solid transparent;
          border-left: 1rem solid transparent;
          border-top: 1rem solid ${theme.colors.black};
          top: 2rem;
          right: 7rem;
        }`}
  `}
`
