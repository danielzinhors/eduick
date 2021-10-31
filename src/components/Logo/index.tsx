import * as S from './styles'

export type LogoProps = {
  size?: 'normal' | 'large' | 'small'
  id?: string
  isNav?: boolean
  isCompleto?: boolean
}

const Logo = ({
  id = 'logo',
  size = 'normal',
  isNav = false,
  isCompleto = true
}: LogoProps) => (
  <S.Wrapper size={size} aria-label="Eduick logo">
    {!isNav ? (
      !isCompleto ? (
        <S.Img src="/img/detailSimples.png" id={id} />
      ) : (
        <S.Img src="/img/detail.png" id={id} />
      )
    ) : (
      <S.Img src="/img/logoeduick.png" id={id} />
    )}
  </S.Wrapper>
)

export default Logo
