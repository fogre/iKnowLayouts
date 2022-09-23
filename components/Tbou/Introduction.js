import styled from 'styled-components'

import { useScrollTreshold } from '../../hooks/useScrollTreshold'
import { TBOU_CONST } from '../../utils/constants'
import { PBig } from './TextComponents'

const Introduction = () => {
  const { overThreshold } = useScrollTreshold(80)

  return (
    <section>
      <StickyHeadingWrapper>
        <StickyH1>
          <FirstText changeColor={overThreshold}>
            Taking<br/>
            Business<br/>
          </FirstText>
          <LastText>Beyond</LastText><br/>
          <LastText>Observable Universe</LastText>
        </StickyH1>
      </StickyHeadingWrapper>
      <PBig>We at the TBOU know the need of cross multiversal business. With billions of years of experience (relatively to the Solar system), we are the beacon of metaversal business management.</PBig>
      <PBig>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</PBig>
    </section>
  )
}

const StickyHeadingWrapper = styled.div`
  --h1-size: 4rem;
  --h1-area: calc(2.5 * var(--h1-size));
  --sticky-height: 110vh;
  width: 100%;
  height: calc(var(--sticky-height) + var(--h1-area));

  @media (${TBOU_CONST.screen.tablet}) {
    --h1-size: 3rem;
    --h1-area: calc(3 * var(--h1-size));
  }

  @media (${TBOU_CONST.screen.phoneL}) {
    --sticky-height: 90vh;
    --h1-area: calc(4 * var(--h1-size));
  }

  @media (${TBOU_CONST.screen.phoneT}) {
    --h1-size: 2.5rem;
  }
`
const StickyH1 = styled.h1`
  color: var(--color-grey);
  position: sticky;
  padding-top: calc(50vh - var(--h1-area));
  top: 0;
  left: 0;
  font-size: var(--h1-size);
  text-align: center;

  @media (${TBOU_CONST.screen.phoneL}) {
    text-align: start;
    br {
      display: block;
      margin: 0;
      content: "";
    }
  }
`
const FirstText = styled.span`
  color: ${p => p.changeColor ? 'var(--color-dark)' : 'inherit'};
  transition: color 1500ms linear;
`
const LastText = styled.span`
  @media (${TBOU_CONST.screen.phoneL}) {
    display: block;
    text-align-last: center;
  }
`
export default Introduction