import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 360px;
    height: 323px;
    background-color: ${theme.colors.white};
    ${media.lessThan('medium')`
      width: 298px;
      height: 256px;
    `}
  `}
`

export const ImageBox = styled.a`
  ${({ theme }) => css`
    min-height: 16.5rem;
    position: relative;
    width: 335.31px;
    ${media.lessThan('medium')`
        width: 295.35px;
        height: 123.16px;
    `}
    background: #f6f7f8;
    margin: 0 auto;
    margin-top: 12px;
    background-image: linear-gradient(
      to right,
      #f6f7f8 0%,
      #edeef1 20%,
      #f6f7f8 40%,
      #f6f7f8 100%
    );
    background-size: 80rem 14rem;
    animation: placeholderShimmer 1s linear infinite forwards;
    @keyframes placeholderShimmer {
      0% {
        background-position: -40rem 0;
      }
      100% {
        background-position: 40rem 0;
      }
    }

    > img {
      width: 100%;
      max-width: 100%;
      height: 100%;
      border-radius: ${theme.border.radius};
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 12px;
    ${media.lessThan('medium')`
      margin-top: ${theme.spacings.small};
    `}
  `}
`

export const Info = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    color: ${theme.colors.black};
  `}
`

export const Title = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-family: 'Poppins';
    line-height: 28.8px;
    margin-top: 24px;
    width: 80%;
    font-weight: 600;
  `}
`

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Lessons = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    background: #cfc9e9;
    width: 84px;
    height: 31px;
    border-radius: ${theme.border.radius};
    font-size: ${theme.font.sizes.small};
    padding: 6px;
  `}
`

export const Star = styled.div`
  display: flex;
  align-items: start;
  justify-content: flex-start;
  svg {
    width: 2.3rem;
  }
`
export const StarFull = styled.div`
  svg {
    color: #ffc908;
  }
`

export const StarEmpty = styled.div`
  svg {
    color: #c4c4c4;
  }
`

export const Label = styled.span``
