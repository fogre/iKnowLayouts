import Head from 'next/head'
import styled from 'styled-components'

import { TBOU_CONST } from '../../utils/constants'
import Background from '../../components/Tbou/Background'
import Footer from '../../components/Tbou/Footer'
import Showcase from '../../components/Tbou/Showcase'
import Introduction from '../../components/Tbou/Introduction'


const TbouIndex = () => {
  return (
    <>
      <ContentWrapper>
        <Introduction />
        <Showcase />
      </ContentWrapper>
      <Background />
    </>
  )
}

TbouIndex.getLayout = page => {
  return (
    <Wrapper>
      <Head>
        <title>iKL/TBOU</title>
        <meta name="description" content="TBOU multiversal business management" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {page}
      </main>
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  --content-width: 1000px;
  --ball-size: calc(var(--content-width) + 50px);
  --color-dark: black;
  --color-grey: hsl(0, 0%, 68%);
  --color-white: white;
  
  height: 100%;
  width: 100%;
  font-family: 'Exo', sans-serif;
  font-size: 1rem;
  position: relative;

  h1, h2, h3, h4 {
    line-height: 1.3;
    font-family: 'Sora', sans-serif;
  }

  h1, h2 {
    margin-bottom: 32px;
  }

  h2 {
    font-size: 3rem;
  }

  h3 {
    font-size: 2rem;
  }

  h4 {
    font-size: 1.7rem;
  }

  h2, h3 {
    text-align: center;
  }

  p {
    display: block;
    margin-block-start: 1rem;
    margin-block-end: 1rem;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  @media (${TBOU_CONST.screen.phoneL}) {
    h2, h3 {
      text-align: start;
    }
  }
`
const ContentWrapper = styled.div`
  width: var(--content-width);
  max-width: 100%;
  margin: 0 auto;
  padding: 0 30px;
  z-index: 1;
  margin-bottom: 200px;
  position: relative;
`
export default TbouIndex