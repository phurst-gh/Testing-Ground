import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr); /* 8 equal columns */
  max-width: 1240px; /* Set max width */
  margin: 0 auto;
  padding: ${(props) => props.padding || "16px"};
`;

const GridItem = styled.div`
  grid-column: ${({ start, end }) => start && end && `${start} / ${end}`};
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
