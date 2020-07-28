import React from 'react';
import styled from 'styled-components'

// Assets

const StyledSearchContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`

const StyledInput = styled.input`
  background-color: #F2F5F8;
  border: none;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  font-size: 16px;

  ::placeholder {
    font-weight: bold;
    color: rgba(0, 0, 0, .4);

    @media (max-width: 500px) {
      font-size: 10px;
    }
  }
`

const StyledSubmit = styled.button`
  display: flex;
  color: #fff;
  font-weight: bold;
  padding: 10px;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  border: none;
  min-width: 50px;
  background-color: #11d3b6;
  cursor: pointer;

  @media (max-width: 700px) {
    height: 40px;
    width: 100%;
    display: block;
    font-size: 10px;
  }
`

const AppSearchBox = () => (
  <StyledSearchContainer>
    <StyledInput placeholder="Procure por título ou descrição de projetos" />
    <StyledSubmit>
      Buscar
    </StyledSubmit>
  </StyledSearchContainer>
)

export default AppSearchBox;
