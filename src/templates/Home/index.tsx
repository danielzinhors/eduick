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
      <Container>
        <S.Content>
          <MediaMatch greaterThan="medium">
            <Logo size="normal" />
          </MediaMatch>
          <S.Center>
            <Heading size="medium">Find your</Heading>
            <Heading size="huge" color="yellow">
              BEST TEACHER
            </Heading>
            <TextContent content="Whether you are a student trying to find your ideal private language teachers/tutors or a teacher trying to find great students for your customised private lessons!" />
            <S.Search>
              <TextField placeholder="Type here what are you looking for" />
              <S.Select>
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
                <MediaMatch greaterThan="medium">
                  <Button>SEARCH</Button>
                </MediaMatch>
                <MediaMatch lessThan="medium">
                  <Button fullWidth={true}>SEARCH</Button>
                </MediaMatch>
              </S.Select>
            </S.Search>
          </S.Center>
          <MediaMatch greaterThan="medium">
            <S.Logo>
              <Logo isCompleto={false} size="normal" />
            </S.Logo>
          </MediaMatch>
          <MediaMatch lessThan="medium">
            <Logo size="normal" />
          </MediaMatch>
        </S.Content>
      </Container>
    </Base>
  </S.Wrapper>
)

export default Home
