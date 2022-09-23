import styled from 'styled-components'
import { ArrowRight } from 'react-feather'

import { TBOU_CONST } from '../../utils/constants'
import { PSmall } from './TextComponents'

const ShowCaseCard = ({ text, height, children }) => (
  <CaseCard>
    <a onClick={() => alert('just a fake link')}>
      <ImageWrapper height={height}>
        {children}
      </ImageWrapper>
      <CardText>
        <PSmall style={{ margin: '0' }}>{text}</PSmall>
        <ArrowRight
          style={{ flexShrink: '0' }}
          size={30}
          strokeWidth={1}
        />
      </CardText>
    </a>
  </CaseCard>
)

const CardText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0 8px;
  color: black;
`
const CaseCard = styled.article`
  display: block;
  width: 100%;
  margin: 0;
  padding: 0;
  outline: none;
  outline-offset: 5px;
  transition: outline 500ms linear;

  &:hover {
    outline: 1px solid var(--color-grey);
    color: var(--color-white);
  }

  @media (${TBOU_CONST.screen.tablet}) {
    outline: 1px solid var(--color-grey);
  }
`
const ImageWrapper = styled.figure`
  width: 100%;
  height: ${p => p.height};
  position: relative;
  background-image: linear-gradient(
    160deg,
    hsl(0deg 0% 100%) 0%,
    hsl(344deg 0% 99%) 18%,
    hsl(344deg 0% 97%) 31%,
    hsl(344deg 0% 96%) 42%,
    hsl(344deg 0% 94%) 51%,
    hsl(344deg 0% 93%) 58%,
    hsl(344deg 0% 92%) 64%,
    hsl(344deg 0% 90%) 70%,
    hsl(344deg 0% 89%) 77%,
    hsl(0deg 0% 88%) 99%
  );

  @media (${TBOU_CONST.screen.phoneL}) {
    width: 100%;
    height: auto;
    aspect-ratio: 1/1
  }
`
export default ShowCaseCard