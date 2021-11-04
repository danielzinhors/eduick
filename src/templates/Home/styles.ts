import styled, { css } from 'styled-components'
import * as BaseStyles from 'templates/Base/styles'
import * as TextContentStyles from 'components/TextContent/styles'
import * as TextFieldStyles from 'components/TextField/styles'
import * as HeadingStyles from 'components/Heading/styles'

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
  grid-column: 3;
  grid-template-columns: 1fr 2fr 1fr;
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
`
export const Radio = styled.div``

export const Search = styled.div`
  margin-top: 60px;
  margin-left: 25px;
`

export const Logo = styled.div`
  margin-top: -120px;
`
