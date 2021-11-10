import Link from 'next/link'
import Image from 'next/image'
import Card, { CardProps } from 'components/Card'
import Container from 'components/Container'
import Grid from 'components/Grid'
import Heading from 'components/Heading'
import Logo from 'components/Logo'
import TextContent from 'components/TextContent'
import MediaMacth from 'components/MediaMatch'
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
              <MediaMacth greaterThan="medium">
                <Logo isNav={true} size="normal" />
              </MediaMacth>
              <MediaMacth lessThan="medium">
                <Logo isNav={true} size="small" />
              </MediaMacth>
            </S.Link>
          </Link>
          <MediaMacth greaterThan="medium">
            <Heading size="small">My Classes</Heading>
          </MediaMacth>
        </S.Logo>
      </Container>
    </S.Nav>
    <Container>
      <S.Info>
        <S.LogoYellow>
          <MediaMacth greaterThan="medium">
            <Image
              src="/img/logoyellow.png"
              alt="logo"
              width={130}
              height={130}
            />
          </MediaMacth>
          <MediaMacth lessThan="medium">
            <Image
              src="/img/logoyellow.png"
              alt="logo"
              width={90}
              height={90}
            />
          </MediaMacth>
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
        <MediaMacth greaterThan="medium">
          <S.Meeting>
            <Image src="/img/Meeting.png" alt="logo" width={332} height={182} />
          </S.Meeting>
        </MediaMacth>
      </S.Info>
      <Grid>
        {curses.length &&
          curses.map((curse) => <Card key={curse.slug} {...curse} />)}
      </Grid>
    </Container>
    <S.Footer>
      <Container>
        <S.Copy>
          <MediaMacth greaterThan="medium">
            <Heading color="black">
              Copyright © 2020 Eduick. Todos os direitos reservados.
            </Heading>
          </MediaMacth>
          <MediaMacth lessThan="medium">
            <Heading color="black">Copyright © 2020 Eduick.</Heading>
          </MediaMacth>
        </S.Copy>
      </Container>
    </S.Footer>
  </S.Wrapper>
)

export default Dashboard
