import styled, { css, DefaultTheme } from 'styled-components'

import { ButtonProps } from '.'

export type WrapperProps = {
  hasIcon: boolean
} & Pick<ButtonProps, 'size' | 'fullWidth' | 'minimal'>

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    width: 16.5rem;
    height: 4.8rem;
    font-size: ${theme.font.sizes.xsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    width: 20.9rem;
    height: 5.6rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  large: (theme: DefaultTheme) => css`
    width: 27.2rem;
    height: 4.8rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,

  fullWidth: () => css`
    width: 100%;
  `,

  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.5rem;
      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,

  minimal: () => css`
    background: none;
  `,

  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      filter: saturate(30%);
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, hasIcon, minimal, disabled }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #ffd74f;
    color: ${theme.colors.colorFontSecundary};
    border: 0;
    box-shadow: 1px 3px 11px -3px rgba(255, 231, 150, 0.45);
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    text-decoration: none;
    cursor: default;
    ${!!size && wrapperModifiers[size](theme)};
    ${!!fullWidth && wrapperModifiers.fullWidth()};
    ${!!hasIcon && wrapperModifiers.withIcon(theme)};
    ${!!minimal && wrapperModifiers.minimal()};
    ${!!disabled && wrapperModifiers.disabled()};
  `}
`
