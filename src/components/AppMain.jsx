import React, { useEffect, useState } from "react";
import styled from "styled-components";

// Components
import AppLabItem from "./cards/AppLabItem";

// Consts
const API_LABS_ENDPOINT = "https://api.rcrd.me/labs";

// Styled
const StyledMain = styled.main`
  display: flex;
  width: 60%;
  height: 100vh;
  max-height: 100%;
  padding: 35px;
  padding-left: 0;
  overflow: hidden;

  @media screen and (max-width: 700px) {
    padding: 0;
    overflow: unset;
    height: unset;
    max-height: unset;
    width: 100%;
  }
`;

const StyledList = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: column;
  overflow-y: auto;
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
      <StyledList>
        {labItems.map((item, index) => (
          <AppLabItem item={item} key={index} />
        ))}
      </StyledList>
    </StyledMain>
  )
};

export default AppMain;
