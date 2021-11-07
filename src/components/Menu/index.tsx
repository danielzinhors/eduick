import { useState } from 'react'
import Link from 'next/link'
import { Menu2 as MenuIcon } from '@styled-icons/remix-line/Menu2'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import * as S from './styles'
import Button from 'components/Button'
import MediaMatch from 'components/MediaMatch'
import Logo from 'components/Logo'

export type MenuProps = {
  onClick?: () => void
}

const Menu = ({ onClick }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon size={24} aria-label="Open menu" />
        </S.IconWrapper>
        <S.LogoMenu>
          <Logo size="small" isNav />
        </S.LogoMenu>
      </MediaMatch>
      <MediaMatch greaterThan="medium">
        <S.Logo>
          <Logo size="small" isNav />
          <>
            <Link href="/" passHref>
              <S.MenuLink>How it works</S.MenuLink>
            </Link>
            <Link href="/" passHref>
              <S.MenuLink>About Us</S.MenuLink>
            </Link>
          </>
        </S.Logo>
      </MediaMatch>
      <S.MenuGroup>
        <MediaMatch greaterThan="medium">
          <Link href="/" passHref>
            <Button onClick={onClick}>Get Started</Button>
          </Link>
        </MediaMatch>
      </S.MenuGroup>
      <S.MenuFull id="menufull" aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon
          size={24}
          aria-label="Close menu"
          onClick={() => setIsOpen(false)}
        />
        <S.LogoNav>
          <Logo size="large" isNav />
        </S.LogoNav>
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
            <Button fullWidth onClick={onClick}>
              Get Started
            </Button>
          </Link>
        </S.RegisterBox>
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
