import styled from 'styled-components';

const FlashErrorStyled = styled.div`
  @keyframes slideIn {
    0% {
      transform: translateX(-10px);
    }
    50% {
      transform: translateX(10px);
    }
    100% {
      transform: translateX(0px);
    }
  }

  background: linear-gradient(20deg, rgba(255,0,0,1) 0%, rgba(200,0,0,1) 100%);
  box-shadow: 0 3px 10px rgba(0,0,0,0.15);
  margin-bottom: 1rem;
  padding: .3rem;
  position: relative;
  z-index: 1;
  border-radius: 3px;
  display: flex;
  animation: slideIn forwards .1s ease-in-out 2;
  animation-timing-function: cubic-bezier(0.01, 1.68, 0.58, 1);
  & + .flash {
    animation-delay: 0.55s;
    & + .flash {
      animation-delay: 0.6s;
    }
  }

  div {
    display: flex;
    justify-content: center;
    padding: .5rem;
    background: white;
    border-radius: 2px;
    box-shadow: 0 0 2px 2px rgba(0,0,0,0.2);
    width: 100%;
    height: 100%;
  }

`;

const FlashError = ({ message }) => {

console.log(message)

return(
  <FlashErrorStyled>
    <div>
      {message}
    </div>
  </FlashErrorStyled>
)};

export default FlashError;