import styled, { css } from 'styled-components'
import * as BaseStyles from 'templates/Base/styles'
import * as TextContentStyles from 'components/TextContent/styles'
import * as TextFieldStyles from 'components/TextField/styles'
import * as HeadingStyles from 'components/Heading/styles'
import * as RadioStyles from 'components/Radio/styles'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    ${BaseStyles.Content} {
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
    grid-template-columns: 1fr 2fr 1fr;
  `}
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
    /* margin-left: 25px; */
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
      font-size: ${theme.font.sizes.xxsmall};
      width: 130px;
      ${media.greaterThan('medium')`
        width: 162px;
        height: 56px;
      `}
    }
  `}
`

export const Logo = styled.div`
  margin-top: -120px;
  ${media.lessThan('medium')`
    margin-top: 120px;
  `}
`
