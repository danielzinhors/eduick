import styled, { css } from 'styled-components'
import * as LogoStyles from 'components/Logo/styles'
import * as HeadingStyles from 'components/Heading/styles'
import * as TextContentStyles from 'components/TextContent/styles'
import * as CardStyles from 'components/Card/styles'
import * as ButtonStyles from 'components/Button/styles'

import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${theme.colors.fundoDash};
    ${media.lessThan('medium')`
      ${CardStyles.Wrapper} {
        width: 322px;
        height: 320px;
      }
    `}
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
export const NavInt = styled.div`
  ${media.greaterThan('medium')`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `}
`

export const Drop = styled.div`
  ${media.greaterThan('medium')`
      margin-top: 15px;
      ${ButtonStyles.Wrapper} {
        height: 3.2rem;
        background: #200E64;
        color: #ffffff;
      }
  `}
`

export const Logo = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    width: 150px;
    margin-top: 20px;
    ${LogoStyles.Wrapper} {
      width: 20rem;
    }
    ${HeadingStyles.Wrapper} {
      font-family: 'Open Sans';
      font-size: ${theme.font.sizes.small};
    }
    ${media.greaterThan('medium')`
      width: 350px;
    `}
  `}
`

export const Link = styled.a``

export const Info = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: row;
    margin-top: 8rem;
    height: 222px;
    width: 322px;
    ${media.greaterThan('medium')`
      height: 235px;
      width: 1140px;
    `}
    background: ${theme.colors.white};
  `}
`

export const LogoYellow = styled.div`
  position: absolute;
  left: 220px;
  top: -10px;
  ${media.greaterThan('medium')`
    width: 126px;
    height: 126px;
    left: -40px;
    top: 25px;
  `}
`

export const InfoCenter = styled.div`
  margin-top: 40px;
  margin-left: 20px;
  ${TextContentStyles.Wrapper} {
    font-size: 14px;
    width: 232px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    color: #343434;
    padding: 0;
    margin-top: 5rem;
    line-height: 22.4px;
  }
  ${media.greaterThan('medium')`
    margin-top: 42px;
    margin-left: 150px;
    ${TextContentStyles.Wrapper} {
      width: 450px;
      font-weight: 400;
    }
  `}
`

export const Titles = styled.div`
  display: flex;
  flex-direction: row;
`

export const FirstTitle = styled.div`
  font-size: 21px;
  ${HeadingStyles.Wrapper} {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: normal;
    color: #000;
  }
`
export const SecondTitle = styled.div`
  margin-left: 10px;
  font-size: 21px;
  ${HeadingStyles.Wrapper} {
    color: #000;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: bold;
  }
`
export const Meeting = styled.div`
  margin-top: 25px;
  margin-left: 53px;
`

export const Footer = styled.footer`
  ${({ theme }) => css`
    bottom: 0;
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
