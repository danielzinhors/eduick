import { useState } from 'react'
import Link from 'next/link'
import { Menu2 as MenuIcon } from '@styled-icons/remix-line/Menu2'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import * as S from './styles'
import Button from 'components/Button'
import MediaMatch from 'components/MediaMatch'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open menu" />
        </S.IconWrapper>
      </MediaMatch>
      <MediaMatch greaterThan="medium">
        <Link href="/" passHref>
          <S.MenuLink>How it works</S.MenuLink>
        </Link>
        <Link href="/" passHref>
          <S.MenuLink>About Us</S.MenuLink>
        </Link>
      </MediaMatch>
      <S.MenuGroup>
        <MediaMatch greaterThan="medium">
          <Link href="/" passHref>
            <Button as="a">Get Started</Button>
          </Link>
        </MediaMatch>
      </S.MenuGroup>
      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <Link href="/" passHref>
            <S.MenuLink href="/">How it works</S.MenuLink>
          </Link>
          <Link href="/" passHref>
            <S.MenuLink>About Us</S.MenuLink>
          </Link>
        </S.MenuNav>
        <S.RegisterBox>
          <Link href="/" passHref>
            <Button fullWidth size="large">
              Get Started
            </Button>
          </Link>
        </S.RegisterBox>
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
