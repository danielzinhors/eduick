import styled, { css, DefaultTheme } from 'styled-components'
import { RadioProps } from '.'

export const Wrapper = styled.div`
  width: 162px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const InputModifiers = {
  border: (theme: DefaultTheme) => css`
    ${Wrapper} {
      border: 1px solid ${theme.colors.white};
    }
  `
}

export const Input = styled.input`
  ${({ theme }) => css`
    display: none;
    &:checked {
      + label {
        &:before {
          background: ${theme.colors.yellow};
          color: ${theme.colors.black};
          content: '\\2713';
          text-align: center;
        }
      }
      ${InputModifiers.border(theme)}
    }
  `}
`

export const Label = styled.label<Pick<RadioProps, 'labelColor'>>`
  ${({ theme, labelColor }) => css`
    ${!!labelColor && `color: ${theme.colors[labelColor]};`}
    cursor: pointer;
    &:before {
      border: 1px solid ${theme.colors.lilas};
      content: '\\00a0';
      display: inline-block;
      font: 16px/1em sans-serif;
      height: 16px;
      margin: 0 0.25em 0 0;
      padding: 0;
      vertical-align: top;
      width: 16px;
      border-radius: 50%;
      padding-left: 2px;
      background: ${theme.colors.lilas};
      margin-right: 20px;
    }
  `}
`