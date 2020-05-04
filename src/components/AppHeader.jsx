import React from 'react';
import styled from 'styled-components'

// Assets
import darkHeaderBg from './../assets/dark-header-bg.jpg';
import gradientHeaderCircle from './../assets/gradient-header-circle.png';
import logo from './../assets/logo-w.svg';

const StyledHeader = styled.header`
  font-family: "Montserrat", sans-serif;
  background-image: url(${darkHeaderBg});
  background-size: cover;
  height: 100%;
  width: 40%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media screen and (max-width: 700px) {
    width: 100%;
    min-height: unset;
    height: unset;
  }
`

const StyledAnchor = styled.a`
  text-decoration: none;
  max-width: 100%;
  padding: 27vh 0;
  background-image: url(${gradientHeaderCircle});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right -50px center;

  @media screen and (max-width: 700px) {
    padding: 5vh;
    background-size: 100%;
    background-position: center center;
  }
`

const StyledTitle = styled.h1`
  max-width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
`

const StyledSpan = styled.span`
  color: #ffffff;
  line-height: 1;
  font-weight: bolder;
  font-size: 11.6vw;
  margin-right: 10px;
`

const StyledImg = styled.img`
  width: 110px;

  @media screen and (max-width: 700px) {
    width: 55px
  }
`
const AppHeader = () => (
  <StyledHeader>
    <StyledAnchor href="/">
      <StyledTitle>
        <StyledSpan>LABS</StyledSpan>
        <StyledImg src={logo} alt="" />
      </StyledTitle>
    </StyledAnchor>
  </StyledHeader>
)

export default AppHeader;
