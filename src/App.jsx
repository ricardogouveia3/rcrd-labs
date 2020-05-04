import React from 'react';
import styled from 'styled-components'

import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'

const StyledApp = styled.div`
  display: flex;

  @media screen and (max-width: 700px) {
    flex-direction: column
  }
`;

const App = () => (
  <StyledApp className="App">
    <AppHeader />
    <AppMain />
  </StyledApp>
);

export default App;
