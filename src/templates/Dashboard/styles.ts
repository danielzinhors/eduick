import styled, { css } from 'styled-components'
import * as LogoStyles from 'components/Logo/styles'
import * as HeadingStyles from 'components/Heading/styles'
import * as TextContentStyles from 'components/TextContent/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${theme.colors.fundoDash};
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

export const Link = styled.a``

export const Info = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: row;
    margin-top: 8rem;
    background: ${theme.colors.white};
    height: 235px;
    width: 100%;
    width: 1140px;
  `}
`

export const LogoYellow = styled.div`
  position: absolute;
  width: 126px;
  height: 126px;
  left: -40px;
  top: 25px;
`

export const InfoCenter = styled.div`
  margin-top: 42px;
  margin-left: 118px;
  ${TextContentStyles.Wrapper} {
    margin-left: -30px;
    width: 450px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 160%;
    color: #343434;
  }
`

export const Titles = styled.div`
  display: flex;
  flex-direction: row;
`

export const FirstTitle = styled.div`
  ${HeadingStyles.Wrapper} {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: normal;
    color: #000;
  }
`
export const SecondTitle = styled.div`
  margin-left: 10px;
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
