import Head from 'next/head'
import styled from 'styled-components'

import Main from '../components/LandingPage/Main'

const Home = () => {
  return (
    <Wrapper>
      <Head>
        <title>i Know Layouts</title>
        <meta name="description" content="Having fun with different layouts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <H1>iKnowLayouts</H1>
      </Header>
      <Main />
      <Footer>
        Site by <a href='https://github.com/fogre' rel='noopener noreferrer' target='_blank'>fogre</a> -  all rights reserved.
      </Footer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  --background-color: hsl(204deg 16% 8%);
  --h1-font-size: 15vw;
  --linear-gradient: linear-gradient(45deg, #f3ec78, #af4261);

  font-family: "Exo", sans-serif;
  background-color: var(--background-color);
  width: 100%;
  height: 100%;
  position: relative;
`
const Header = styled.header`
  width: 100%;
  min-height: 25vh;
`
const H1 = styled.h1`
  font-family: 'Nabla', cursive;
  font-display: block;
  font-size: var(--h1-font-size);
  text-align: center;

  background-color: #f3ec78;
  background-image: var(--linear-gradient);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-text-fill-color: transparent;
`

const Footer = styled.footer`
  background-color: var(--background-color);
  width: 100%;
  text-align: center;
  color: grey;
  padding-bottom: 16px;
`
export default Home