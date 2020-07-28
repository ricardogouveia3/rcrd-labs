import React from "react";
import styled from "styled-components";

const StyledListItem = styled.li`
  min-height: 50vh;
  transition: opacity 0.3s ease;

  &:hover { opacity: 0.9; }

  @media screen and (max-width: 700px) { min-height: 30vh; }
`;

const StyledAnchor = styled.a`
  transition: padding 0.3s ease;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 20px;

  &:hover { padding-bottom: 40px; }
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
