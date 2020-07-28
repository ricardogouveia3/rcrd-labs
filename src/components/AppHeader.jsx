import React from 'react';
import styled from 'styled-components'

// Assets
import logo from './../assets/logo-w.svg';

const StyledHeader = styled.header`
  background-color: #4f4f4f;
  padding: 40px;
  width: 100%;
  display: flex;
  overflow: hidden;
`

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 1100px;

  hr {
    border: .5px solid #efefef;
    margin-bottom: 20px;

    @media screen and (max-width: 700px) {
      width: 100%
    }
  }

  img {
    width: 70px;
  }

  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const StyledTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 80px;

  p {
    color: #fff;
    text-align: left;
    max-width: 37%;
    font-weight: 300;
    font-size: 14px;

    @media screen and (max-width: 700px) {
      max-width: unset;
      text-align: center;
    }
  }

  @media screen and (max-width: 700px) {
    margin-top: 40px;
    align-items: center;
    flex-direction: column;
  }
`

const StyledTitle = styled.h1`
  color: #fff;
  font-size: 6vw;
  margin: 0;
  line-height: .9;

  span {
    display: block;
    color: #11d3b6;
    letter-spacing: 4px;
  }

  @media screen and (max-width: 700px) {
    font-size: 5em;
  }
`

const AppHeader = () => (
  <StyledHeader>
    <StyledContainer>
      <hr />
      <img src={logo} alt=''></img>
      <StyledTextContainer>
        <StyledTitle>
          RCRD
          <span>LABS</span>
        </StyledTitle>
        <p>Estes são projetos experimentais e podem conter falhas de responsividade, acessibilidade e qualidade de software em geral. Também podem fazer uso de tecnologias pouco suportadas sem oferecer fallback.</p>
      </StyledTextContainer>
    </StyledContainer>
  </StyledHeader>
)

export default AppHeader;
