import Card, { CardProps } from 'components/Card'
import Container from 'components/Container'
import Grid from 'components/Grid'
import Heading from 'components/Heading'
import Logo from 'components/Logo'
import * as S from './styles'

export type DashboardProps = {
  curses?: CardProps[]
}
const Dashboard = ({ curses = [] }: DashboardProps) => (
  <S.Wrapper>
    <S.Nav>
      <Container>
        <S.Logo>
          <Logo isNav={true} size="normal" />
          <Heading size="small">My Classes</Heading>
        </S.Logo>
      </Container>
    </S.Nav>
    <Container>
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
