import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import * as BaseStyles from 'templates/Base/styles'
import * as TextContentStyles from 'components/TextContent/styles'
import * as TextFieldStyles from 'components/TextField/styles'
import * as HeadingStyles from 'components/Heading/styles'
import * as RadioStyles from 'components/Radio/styles'
import * as LogoStyles from 'components/Logo/styles'
import * as ButtonStyles from 'components/Button/styles'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    ${BaseStyles.Content} {
      display: flex;
      flex-direction: row;
      z-index: ${theme.layers.base};
    }
  `}
`

export const Content = styled.div`
  display: grid;
  grid-column: 1;
  grid-template-columns: 1fr;
  ${media.greaterThan('medium')`
    grid-column: 3;
    grid-template-columns: 1fr 1fr 1fr;
  `}
`
export const LogoCompleto = styled.div`
  ${LogoStyles.Wrapper} {
    height: 50rem;
    width: 35rem;
  }
`

export const Center = styled.div`
  ${({ theme }) => css`
    ${HeadingStyles.Wrapper} {
      margin-left: ${theme.spacings.small};
    }
    ${TextContentStyles.Wrapper} {
      width: 496px;
      height: 88px;
      left: 1065px;
      top: 367px;
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: normal;
      font-size: ${theme.font.sizes.medium};
      line-height: 191.68%;
    }
  `}
`
export const Search = styled.div`
  ${({ theme }) => css`
    margin-top: 60px;
    ${TextFieldStyles.Wrapper} {
      margin-left: ${theme.spacings.small};
      width: 272px;
      ${media.greaterThan('medium')`
        width: 580px;
      `}
      input::placeholder {
        color: #ffffff;
      }
    }
  `}
`
export const Select = styled.div`
  ${media.greaterThan('medium')`
    display: flex;
    flex-direction: row;
  `}
`

export const Btn = styled.div`
  ${({ theme }) => css`
    width: 272px;
    margin-left: ${theme.spacings.small};
    margin-bottom: ${theme.spacings.xsmall};
    ${media.greaterThan('medium')`
      margin-top: 15px;
      height: 56px;
      width: 209px;
    `}
  `}
`
export const Check = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    margin-top: ${theme.spacings.xsmall};
    margin-left: ${theme.spacings.small};
    ${RadioStyles.Wrapper} {
      background: ${theme.colors.blue};
      margin-right: 12px;
      margin-bottom: 10px;
      font-size: ${theme.font.sizes.xsmall};
      width: 130px;
      ${media.greaterThan('medium')`
        width: 162px;
        height: 56px;
      `}
    }
  `}
`

export const LogoSimples = styled.div`
  margin-top: -90px;
  ${LogoStyles.Wrapper} {
    height: 50rem;
    width: 32rem;
  }
`

export const Logo = styled.div`
  ${media.lessThan('medium')`
    margin-top: 50px;
    ${LogoStyles.Wrapper} {
      height: 50rem;
      width: 32rem;
    }
  `}
`
/*Modal*/
export type ModalSectionProps = {
  isOpen?: boolean
}

export const ModalSection = styled.section<ModalSectionProps>`
  ${({ theme, isOpen }) => css`
    height: 100vh;
    width: 100%;
    background: #200e64;
    opacity: 0.95;
    position: fixed;
    top: 0;
    left: 0;
    z-index: ${theme.layers.modal};
    ${!isOpen ? 'display: none' : 'display: flex'};
    justify-content: center;
    align-items: center;
  `}
`

export const Modal = styled.div`
  background: #6a40e4;
  height: 100vh;
  opacity: 1;
  ${media.greaterThan('medium')`
    width: 525px;
    max-width: 525px;
    height: 479px;
  `}
  box-sizing: border-box;
  padding: 40px;
  position: relative;
`

export const Fechar = styled.div`
  background: url('/img/fechar.svg') no-repeat center center;
  position: absolute;
  width: 50px;
  height: 50px;
  top: 30px;
  right: 30px;
  ${media.greaterThan('medium')`
    top: -30px;
    right: -30px;
    border-radius: 50%;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.3);
    background: #200e64 url('/img/fechar.svg') no-repeat center center;
  `}
  cursor: pointer;
  color: transparent;
`

export const FirstTitle = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxsmall};
    ${media.greaterThan('medium')`
      margin-top: ${theme.spacings.large};
    `}
  `}
`

export const SecondTitle = styled.div`
  text-transform: uppercase;
`

export const Username = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xlarge};
    ${TextFieldStyles.Label} {
      color: ${theme.colors.white};
    }
  `}
`

export const Passwd = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
    ${TextFieldStyles.Label} {
      color: ${theme.colors.white};
    }
  `}
`

export const BtnModal = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
    ${media.greaterThan('medium')`
      margin-bottom: ${theme.spacings.large};
      margin-left: 312px;
      ${ButtonStyles.Wrapper} {
        width: 132.52px;
      }
    `}
  `}
`
