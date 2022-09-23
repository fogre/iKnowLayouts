import Image from 'next/image'
import styled from 'styled-components'

import { useScrollTreshold } from '../../hooks/useScrollTreshold'
import { TBOU_CONST } from '../../utils/constants'

const Background = () => {
  const { overThreshold } = useScrollTreshold(80)

  return (
    <BackgroundWrapper>
      <FadeBackground backColor={overThreshold} />
      <FlexWrapper>
        <ImageWrapper>
          <Img
            src='/tbou/wormhole.svg'
            alt='background image of a wormhole'
            layout='fill'
            priority={true}
          />
        </ImageWrapper>
      </FlexWrapper>
    </BackgroundWrapper>
  )
}

const BackgroundWrapper = styled.div`
  --fade-transition: background-color 1500ms linear;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  isolation: isolate;
`
const FadeBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 250vh;
  z-index: -1;
  background-color: ${p =>
    p.backColor ? 'transparent' : 'var(--color-dark)'};
  transition: var(--fade-transition);
`
const FlexWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
`
const ImageWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: var(--ball-size);
  height: var(--ball-size);
  z-index: -1;
  background-color: transparent;

  @media (${TBOU_CONST.screen.phoneL}) {
    width: 100vh;
    height: 100vh;
    bottom: 20%;
  }
`
const Img = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotateZ(1.5deg);
  object-fit: cover;

  @media (${TBOU_CONST.screen.phoneL}) {
    transform: rotateZ(180deg);
  }
`
export default Background