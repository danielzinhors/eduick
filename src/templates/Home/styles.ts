import styled, { css } from 'styled-components'
import * as BaseStyles from 'templates/Base/styles'
import * as TextContentStyles from 'components/TextContent/styles'
import * as TextFieldStyles from 'components/TextField/styles'
import * as HeadingStyles from 'components/Heading/styles'
import * as RadioStyles from 'components/Radio/styles'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    min-width: 100vw !important;
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
  ${TextContentStyles.Wrapper} {
    width: 496px;
    height: 88px;
    left: 1065px;
    top: 367px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 191.68%;
  }
  ${HeadingStyles.Wrapper} {
    margin-left: 25px;
  }
  ${TextFieldStyles.Wrapper} {
    margin-left: 5px;
    input::placeholder {
      color: #ffffff;
    }
  }
  ${media.lessThan('medium')`
    ${TextFieldStyles.Wrapper} {
      width: 90%;
    }
  `}
`
export const Select = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-column: 2;
    grid-template-columns: 1fr 1fr;
    margin-top: 15px;
    ${media.greaterThan('medium')`
      display: flex;
      flex-direction: row;
    `}
    ${RadioStyles.Wrapper} {
      background: ${theme.colors.blue};
      margin-right: 10px;
      margin-bottom: 10px;
    }
  `}
`

export const Search = styled.div`
  margin-top: 60px;
  margin-left: 25px;
`

export const Logo = styled.div`
  margin-top: -120px;
`
