import React from "react";
import styled from "styled-components";

const StyledListItem = styled.li`
  width: 100%;
  min-height: 50vh;
  overflow: hidden;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.9;
  }

  @media screen and (max-width: 700px) {
    min-height: 30vh;
  }
`;

const StyledAnchor = styled.a`
  transition: padding 0.3s ease;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 20px;
  justify-content: center;

  &:hover {
    padding-bottom: 40px;
  }
`;

const StyledSecondTitle = styled.h2`
  font-size: 5vw;
  color: #ffffff;
  margin: 0;
`;

const StyledParagraph = styled.p`
  margin: 0;
  color: #ffffff;
  line-height: 1.5;
`;

const AppLabItem = (props) => (
  <StyledListItem style={{ backgroundColor: props.item.color }}>
    <StyledAnchor
      href={props.item.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <StyledSecondTitle>{props.item.title}</StyledSecondTitle>
      <StyledParagraph>{props.item.description}</StyledParagraph>
    </StyledAnchor>
  </StyledListItem>
);

export default AppLabItem;
