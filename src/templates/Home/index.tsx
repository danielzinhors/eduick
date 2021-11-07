import { Eye } from '@styled-icons/bootstrap/Eye'
import { useRouter } from 'next/router'
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
import { useState, useEffect } from 'react'

const Home = () => {
  const router = useRouter()

  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleClickButton = () => {
    setIsModalOpen(!isModalOpen)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClickLogin = (event: any) => {
    event.preventDefault()
    router.push('/dashboard')
  }

  const handleClickSenha = () => {
    const input = document.getElementById('passwd')
    input?.getAttribute('type') == 'password'
      ? input?.setAttribute('type', 'text')
      : input?.setAttribute('type', 'password')
  }

  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      key === 'Escape' && setIsModalOpen(false)
    }
    window.addEventListener('keyup', handleKeyUp)
    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [])

  useEffect(() => {
    // if (isModalOpen) {
    //   const menu = document.getElementById('menufull')
    //   //menu?.setAttribute('aria-hidden', 'true')
    // }
  }, [isModalOpen])

  return (
    <S.Wrapper>
      <Base onClick={handleClickButton}>
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
        <S.ModalSection
          isOpen={isModalOpen}
          aria-label="modal"
          aria-hidden={!isModalOpen}
        >
          <S.Modal>
            <S.Fechar
              role="button"
              aria-label="close modal"
              onClick={() => setIsModalOpen(false)}
            ></S.Fechar>
            <form action="">
              <S.FirstTitle>
                <Heading>Get Started</Heading>
              </S.FirstTitle>
              <S.SecondTitle>
                <Heading>Just Login</Heading>
              </S.SecondTitle>
              <S.Username>
                <TextField label="Username:" name="username" type="text" />
              </S.Username>
              <S.Passwd>
                <TextField
                  id="passwd"
                  icon={<Eye onClick={handleClickSenha} />}
                  iconPosition="right"
                  label="Password:"
                  name="password"
                  type="Password"
                />
              </S.Passwd>
              <MediaMatch greaterThan="medium">
                <S.BtnModal>
                  <Button size="small" onClick={handleClickLogin}>
                    Login
                  </Button>
                </S.BtnModal>
              </MediaMatch>
              <MediaMatch lessThan="medium">
                <S.BtnModal>
                  <Button fullWidth={true} onClick={handleClickLogin}>
                    Login
                  </Button>
                </S.BtnModal>
              </MediaMatch>
            </form>
          </S.Modal>
        </S.ModalSection>
      </Base>
    </S.Wrapper>
  )
}

export default Home
