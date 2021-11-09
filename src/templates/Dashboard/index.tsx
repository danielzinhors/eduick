import Link from 'next/link'
import Image from 'next/image'
import Card, { CardProps } from 'components/Card'
import Container from 'components/Container'
import Grid from 'components/Grid'
import Heading from 'components/Heading'
import Logo from 'components/Logo'
import TextContent from 'components/TextContent'
import * as S from './styles'

export type DashboardProps = {
  curses?: CardProps[]
}
const Dashboard = ({ curses = [] }: DashboardProps) => (
  <S.Wrapper>
    <S.Nav>
      <Container>
        <S.Logo>
          <Link href="/" passHref>
            <S.Link>
              <Logo isNav={true} size="normal" />
            </S.Link>
          </Link>
          <Heading size="small">My Classes</Heading>
        </S.Logo>
      </Container>
    </S.Nav>
    <Container>
      <S.Info>
        <S.LogoYellow>
          <Image
            src="/img/logoyellow.png"
            alt="logo"
            width={130}
            height={130}
          />
        </S.LogoYellow>
        <S.InfoCenter>
          <S.Titles>
            <S.FirstTitle>
              <Heading>Hello</Heading>
            </S.FirstTitle>
            <S.SecondTitle>
              <Heading>Student</Heading>
            </S.SecondTitle>
          </S.Titles>
          <TextContent
            content={
              'Whether you are a student trying to find your ideal private language teachers/tutors'
            }
          />
        </S.InfoCenter>
        <S.Meeting>
          <Image src="/img/Meeting.png" alt="logo" width={332} height={182} />
        </S.Meeting>
      </S.Info>
      <Grid>
        {curses.length &&
          curses.map((curse) => <Card key={curse.slug} {...curse} />)}
      </Grid>
    </Container>
    <S.Footer>
      <Container>
        <S.Copy>
          <Heading color="black">
            Copyright © 2020 Eduick. Todos os direitos reservados.
          </Heading>
        </S.Copy>
      </Container>
    </S.Footer>
  </S.Wrapper>
)

export default Dashboard
