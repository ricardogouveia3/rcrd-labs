import React from 'react';
import styled from 'styled-components'

const StyledDevelopingFeature = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, .75);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: #fff;
    opacity: .6;
    font-weight: bold;
    text-align: center;
  }
`

const DevelopingCoverWarning = () => (
  <StyledDevelopingFeature>
    <p>Essa funcionalidade está em desenvolvimento</p>
  </StyledDevelopingFeature>
)

export default DevelopingCoverWarning;
