import styled, { css } from 'styled-components'
import * as BaseStyles from 'templates/Base/styles'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    ${BaseStyles.Content} {
      z-index: ${theme.layers.base};
    }
  `}
`
