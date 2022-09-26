import styled from 'styled-components'

import Sites from './Sites'

const Main = () => (
  <MainWrapper>
    <FlexCenter>
      <ContentBorder>
        <Content>
          <h2>A highly curated collection of websites.</h2>
          <p>Or just sites I use to have fun with different web layouts.</p>
          <Sites />
        </Content>
      </ContentBorder>
      <InfoText>This landing page will be updated in due time...</InfoText>
    </FlexCenter>
  </MainWrapper>
)

const MainWrapper = styled.main`
  width: 100%;
  background-color: inherit;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 25vh;

  p {
    font-size: 1.1rem;
    display: block;
    margin-block-start: 1rem;
    margin-block-end: 1rem;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    margin: 16px 0;
  }

  h2 {
    margin-top: 30px;
    margin-bottom: 10px;
  }
`
const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`
const ContentBorder = styled.div`
  width: 100%;
  padding: 5px;
  max-width: max-content;
  background-image: var(--linear-gradient);
  border-radius: 10px;
`
const Content = styled.section`
  background-color: var(--background-color);
  border-radius: 9px;
  width: 100%;
  height: 100%;
  padding: 40px 20px;
`
const InfoText = styled.p`
  font-size: 1rem !important;
  font-weight: bold;
  text-align: center;
  padding: 3px 5px 0;
`
export default Main