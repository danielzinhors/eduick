import Container from 'components/Container'
import Footer from 'components/Footer'
import Menu from 'components/Menu'
import * as S from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
  onClick?: () => void
}

const Base = ({ children, onClick }: BaseTemplateProps) => (
  <S.Wrapper>
    <Container>
      <Menu onClick={onClick} />
    </Container>
    <S.Content>{children}</S.Content>
    <S.SectionFooter>
      <Footer />
    </S.SectionFooter>
  </S.Wrapper>
)

export default Base
