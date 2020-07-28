import React, { useEffect, useState } from "react";
import styled from "styled-components";

// Components
import AppLabItem from "./cards/AppLabItem";
import AppSearchBox from "./AppSearchBox";

import DevelopingCoverWarning from "./special/DevelopingCoverWarning";

// Consts
const API_LABS_ENDPOINT = "https://api.rcrd.me/labs";

// Styled
const StyledMain = styled.main`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-gap: 40px;
  padding: 40px 0;
`;

const StyledContainer = styled.div`
  background-color: #fff;
  padding: 40px;
  box-shadow: 0 6px 15px -7px rgba(0,0,0,0.22);
  position: relative;

  @media (max-width: 500px) {
    padding: 25px;
  }
`;

const StyledList = styled.ul`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill,minmax(250px,1fr));
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const AppMain = () => {
  const [labItems, setLabItems] = useState([]);

  useEffect(() => {
    fetch(API_LABS_ENDPOINT)
      .then((response) => response.json())
      .then((data) => setLabItems(data));
  }, [])

  return (
    <StyledMain>
      <StyledContainer>
        <DevelopingCoverWarning />
        <AppSearchBox />
      </StyledContainer>
      <StyledContainer>
        <StyledList>
          {labItems.map((item, index) => (
            <AppLabItem item={item} key={index} />
          ))}
        </StyledList>
      </StyledContainer>
    </StyledMain>
  )
};

export default AppMain;
