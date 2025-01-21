import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  max-width: 1240px;
  margin: 0 auto;
  padding: ${(props) => props.padding || "16px"};
  height: 100vh;
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-column: 1 / 9;

  @media (min-width: 768px) {
    grid-column: ${({ start, end }) => start && end && `${start} / ${end}`};
  }
`;

const GridContainer = ({ children, padding }) => {
  return (
    <Container padding={padding}>
      {children}
    </Container>
  );
};

const GridChild = ({ children, start, end }) => {
  return (
    <GridItem start={start} end={end}>
      {children}
    </GridItem>
  );
};

export { GridContainer, GridChild };
