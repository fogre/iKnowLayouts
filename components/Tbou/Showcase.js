import Image from 'next/image'
import styled from 'styled-components'
import { ArrowRight } from 'react-feather'

import { TBOU_CONST } from '../../utils/constants'
import { PBig } from './TextComponents'
import ShowCaseCard from './ShowCaseCard'

const ShowCaseImage = ({ src, alt }) => (
  <Image
    src={src}
    alt={alt}
    layout='fill'
    objectFit='cover'
    objectPosition={'center '}
  />
)

const Showcase = () => {
  return (
    <Section>
      <h2>our services</h2>
      <FlexWrapper>
        <FlexLeft>
          <ShowCaseCard
            text='Save your data inside a Black Hole Database'
            height='500px'
          >
            <ShowCaseImage
              src='/tbou/groovyspiral.svg'
              alt='Black Hole Database'
            />
          </ShowCaseCard>
        </FlexLeft>
        <FlexRight>
          <ShowCaseCard
            text='Helping you to escape the single universe marketing prison'
            height='200px'
          >
            <ShowCaseImage
              src='/tbou/jail.svg'
              alt='universe as a prison'
            />
          </ShowCaseCard>
          <ShowCaseCard
            text='Lorem Ipsum Torus'
            height='200px'
          >
            <ShowCaseImage
              src='/tbou/torus.svg'
              alt='torus'
            />
          </ShowCaseCard>
        </FlexRight>
      </FlexWrapper>
      <section style={{ marginTop: 'calc(1rem + 20%)' }}>
        <h3>
          let your product be heard across the universes.
        </h3>
        <PBig>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </PBig>
        <FakeLink
          onClick={() => alert('just a fake link')}
        >
          Our story
          <ArrowRight
            style={{ flexShrink: '0' }}
            size={30}
            strokeWidth={1}
          />
        </FakeLink>
      </section>
    </Section>
  )
}

const FakeLink = styled.a`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  font-weight: bold;
  gap: 10px;
  border-bottom: 1px solid var(--color-grey);
  width: max-content;

  &:hover {
    color: var(--color-grey);
  }
`

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding-top: calc(1rem + 20%);
  margin: 0 auto;
`
const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 130%;
  margin-left: -15%;
  height: 100%;

  @media (${TBOU_CONST.screen.tablet}) {
    width: 100%;
    margin: 0 auto;
    gap: 3rem;
  }

  @media (${TBOU_CONST.screen.phoneL}) {
    width: 100%;
    justify-content: center;
  }
`
const FlexLeft = styled.div`
  width: 60%;
  height: 100%;

  @media (${TBOU_CONST.screen.tablet}) {
    width: 50%;
  }

  @media (${TBOU_CONST.screen.phoneL}) {
    width: 100%;
  }
`
const FlexRight = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  @media (${TBOU_CONST.screen.tablet}) {
    width: 40%;
  }

  @media (${TBOU_CONST.screen.phoneL}) {
    width: 100%;
    flex-wrap: wrap;
    gap: 3rem;
  }
`
export default Showcase