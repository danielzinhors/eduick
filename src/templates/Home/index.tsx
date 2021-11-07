import Base from 'templates/Base'
import Container from 'components/Container'
import Heading from 'components/Heading'
import Logo from 'components/Logo'
import Radio from 'components/Radio'
import TextContent from 'components/TextContent'
import TextField from 'components/TextField'
import Button from 'components/Button'
import * as S from './styles'
import MediaMatch from 'components/MediaMatch'

const Home = () => (
  <S.Wrapper>
    <Base>
      <MediaMatch greaterThan="medium">
        <S.LogoCompleto>
          <Logo size="normal" />
        </S.LogoCompleto>
      </MediaMatch>
      <Container>
        <S.Content>
          <S.Center>
            <Heading size="medium">Find your</Heading>
            <Heading size="huge" color="yellow">
              BEST TEACHER
            </Heading>
            <MediaMatch greaterThan="medium">
              <TextContent content="Whether you are a student trying to find your ideal private language teachers/tutors or a teacher trying to find great students for your customised private lessons!" />
            </MediaMatch>
            <S.Search>
              <TextField placeholder="Type here what are you looking for" />
              <S.Select>
                <S.Check>
                  <Radio
                    id="teacher"
                    name="category"
                    label="I´M A TEACHER"
                    value="teacher"
                    labelFor="teacher"
                    defaultChecked
                  />
                  <Radio
                    id="student"
                    name="category"
                    label="IM A STUDENT"
                    labelFor="student"
                    value="student"
                  />
                </S.Check>
                <S.Btn>
                  <MediaMatch greaterThan="medium">
                    <Button>SEARCH</Button>
                  </MediaMatch>
                  <MediaMatch lessThan="medium">
                    <Button fullWidth={true}>SEARCH</Button>
                  </MediaMatch>
                </S.Btn>
              </S.Select>
            </S.Search>
          </S.Center>
          <MediaMatch lessThan="medium">
            <S.Logo>
              <Logo size="normal" />
            </S.Logo>
          </MediaMatch>
        </S.Content>
      </Container>
      <MediaMatch greaterThan="medium">
        <S.LogoSimples>
          <Logo isCompleto={false} size="normal" />
        </S.LogoSimples>
      </MediaMatch>
    </Base>
  </S.Wrapper>
)

export default Home
