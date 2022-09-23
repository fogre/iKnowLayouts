import styled from 'styled-components'

import { TBOU_CONST } from '../../utils/constants'
import { PSmall, PTiny } from './TextComponents'

const Footer = () => (
  <FooterWrapper>
    <FooterContent>
      <FlexWrapper>
        <Article>
          <h4>TBOU</h4>
          <PTiny><strong>Universe</strong>B2e+2321+3Å</PTiny>
          <PTiny><strong>Galaxy</strong>232-3213-32e</PTiny>
          <PTiny><strong>Galactic position</strong>32e+343f-da</PTiny>
          <PTiny><strong>Star system</strong>da-d4d-32h</PTiny>
          <PTiny><strong>Star</strong>32h+67f-p3454</PTiny>
          <PTiny><strong>Planet</strong>Aergothon</PTiny>
        </Article>
        <Article>
          <h4>CONTACT</h4>
          <PSmall>Use your multiversal telepahty kit to contact our customer service</PSmall>
        </Article>
        <Article>
          <h4>IPSUM PIPSUM</h4>
          <PSmall>Tekeli taeekao kieako ibuleasriesa osefagre</PSmall>
        </Article>
      </FlexWrapper>
      <DetailsWrapper>
        <PTiny>SVGs taken from
          <a
            href='https://freesvg.org/'
            rel='noopener noreferrer'
            target='_blank'
          > freesvg.org</a>
        </PTiny>
      </DetailsWrapper>
    </FooterContent>
  </FooterWrapper>
)
const FooterWrapper = styled.footer`
  width: 100%;
  z-index: 1;
  padding: 3rem 30px 0;
  border-top: 1px solid var(--color-grey);
`
const FooterContent = styled.div`
  width: var(--content-width);
  max-width: 100%;
  margin: 0 auto;
`
const FlexWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 5rem;
`
const Article = styled.article`
  flex: 1;
  min-width: min(100%, 250px);

  h4 {
    margin-bottom: 20px;
  }
`
const DetailsWrapper = styled.aside`
  margin-top: 100px;
  padding-bottom: 30px;
  text-align: center;
  color: var(--color-grey);

  @media (${TBOU_CONST.screen.phoneL}) {
    text-align:start;
  }
`
export default Footer