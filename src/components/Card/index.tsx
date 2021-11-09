/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { StarFill } from '@styled-icons/bootstrap'

import * as S from './styles'

export type CardProps = {
  slug: string
  title: string
  star: number
  img: string
  qtdlessons: number
}

const Card = ({ slug, title, star, img, qtdlessons }: CardProps) => {
  const qtdeStar = [1, 2, 3, 4, 5]

  return (
    <S.Wrapper>
      <Link href={`/curse/${slug}`} passHref>
        <S.ImageBox>
          <img src={img} alt={title} />
        </S.ImageBox>
      </Link>
      <S.Content>
        <S.Box>
          <S.Star>
            <S.StarFull>
              {qtdeStar.map((qtd) => {
                if (qtd <= star) {
                  return <StarFill key={qtd} />
                }
              })}
            </S.StarFull>
            <S.StarEmpty>
              {qtdeStar.map((qtd) => {
                if (qtd > star) {
                  return <StarFill key={qtd} />
                }
              })}
            </S.StarEmpty>
          </S.Star>
          <S.Lessons>
            <S.Label>{qtdlessons} LESSONS</S.Label>
          </S.Lessons>
        </S.Box>
        <S.Title>
          <Link href={`/curse/${slug}`} passHref>
            <S.Info>{title}</S.Info>
          </Link>
        </S.Title>
      </S.Content>
    </S.Wrapper>
  )
}
export default Card
