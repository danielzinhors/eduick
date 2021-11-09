import styled, { css } from 'styled-components'
import * as LogoStyles from 'components/Logo/styles'
import * as HeadingStyles from 'components/Heading/styles'
import * as GridStyles from 'components/Grid/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${theme.colors.fundoDash};
    ${GridStyles.Grid} {
      margin: 8rem 0;
    }
  `}
`

export const Nav = styled.nav`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    background: ${theme.colors.fundoNav};
    height: ${theme.spacings.huge};
    box-shadow: 4px 2px 14px rgb(0 0 0 / 5%);
    width: 100%;
  `}
`

export const Logo = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    width: 350px;
    margin-top: 20px;
    ${LogoStyles.Wrapper} {
      width: 20rem;
    }
    ${HeadingStyles.Wrapper} {
      font-family: 'Open Sans';
      font-size: ${theme.font.sizes.small};
    }
  `}
`

export const Footer = styled.footer`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    height: 60px;
    ${HeadingStyles.Wrapper} {
      font-family: 'Open Sans';
      font-size: ${theme.font.sizes.small};
    }
  `}
`

export const Copy = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    ${HeadingStyles.Wrapper} {
      font-family: 'Open Sans';
      font-size: ${theme.font.sizes.small};
    }
  `}
`
