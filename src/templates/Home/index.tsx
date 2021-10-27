import Container from 'components/Container'
import Logo from 'components/Logo'
import Base from 'templates/Base'
import * as S from './styles'

const Home = () => (
  <S.Wrapper>
    <Base>
      <Container>
        <Logo />
      </Container>
    </Base>
  </S.Wrapper>
)

export default Home
