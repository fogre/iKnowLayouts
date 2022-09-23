import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'


const Home = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Head>
        <title>iKnowLayouts</title>
        <meta name="description" content="Having fun with different layouts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <FlexCenter>
          <Content>
            <H1>iKnowLayouts</H1>
            <p>Highly curated collection of websites.</p>
            <p>Basically just sites I use to practice and have fun with different web layouts.</p>
            <h2>Pages (btw these are links):</h2>
            <Link href='/tbou'>
              <a>- TBOU</a>
            </Link>
          </Content>
        </FlexCenter>
      </Main>
    </div>
  )
}

const Main = styled.main`
  width: 100%;
  height: 100%;
  background-color: hsl(274deg 16% 8%);
  font-family: "Times New Roman", sans-serif;
  color: white;

  h2 {
    margin-top: 30px;
    margin-bottom: 10px;
  }

  a {
    font-size: 3rem;
    color: teal;
  }
`
const FlexCenter = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`
const Content = styled.section`
  padding: 30px;
`
const H1 = styled.h1`
  color: pink;
`
export default Home