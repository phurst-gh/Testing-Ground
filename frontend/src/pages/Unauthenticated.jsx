import { Link } from "react-router-dom"
import styled from "styled-components";

const Wrapper = styled('div')`
  margin: auto;
  margin-top: 10rem;
  background: white;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 30rem;
  border-radius: 0.5rem;

  h1 {
    margin-bottom: 0.5rem
  }
`;

const Unauthenticated = () => (
  <Wrapper>
    <h1>Unauthenticated</h1>
    <p>User is unauthenticated.</p>
    <Link to="/">Return to login.</Link>
  </Wrapper>
);

export default Unauthenticated;