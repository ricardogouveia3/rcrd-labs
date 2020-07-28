import React from 'react';
import styled from 'styled-components'

const StyledFooter = styled.footer`
  background-color: #4f4f4f;
  padding: 40px;
  width: 100%;
  display: flex;
  overflow: hidden;
`

const StyledContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1100px;

  hr {
    border: .5px solid #efefef;
    margin-bottom: 20px;

    @media screen and (max-width: 700px) {
      width: 100%
    }
  }

  p {
    color: #fff;
    text-align: left;
    font-weight: 300;
    font-size: 14px;

    @media screen and (max-width: 700px) { text-align: center; }
  }
`

const AppFooter = () => (
  <StyledFooter>
    <StyledContainer>
      <hr />
      <p>Todo conteúdo deste site está sob licença MIT.</p>
    </StyledContainer>
  </StyledFooter>
)

export default AppFooter;
