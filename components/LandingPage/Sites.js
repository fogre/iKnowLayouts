import Link from 'next/link'
import styled from 'styled-components'

const Sites = () => (
  <Section>
    <h2>Pages :</h2>
    <Link href='/tbou'>
      <a>
        <PageLink>
          <h3>TBOU</h3>
          <p>A business site for a company that spans multiverses</p>
        </PageLink>
      </a>
    </Link>
  </Section>
)

const Section = styled.section`
  h2 {
    padding-bottom: 2px;
    margin-bottom: 30px !important;
    width: max-content;
    border-bottom: 2px solid grey;
  }
`

const PageLink = styled.article`
  border: 2px solid grey;
  border-radius: 10px;
  padding: 20px 10px 0;
  margin-bottom: 20px;

  &:hover {
    border-color: #af4261;

    h3 {
      color: #f3ec78;
    }
  }
`

export default Sites