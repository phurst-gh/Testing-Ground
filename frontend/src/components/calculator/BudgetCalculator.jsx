import styled from 'styled-components';
import CalculatorHeader from "./CalculatorHeader";
import CalculatorBody from "./CalculatorBody";

const BudgetCalculatorWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const BudgetCalculator = () => {
  return (
    <BudgetCalculatorWrapper>
      <CalculatorHeader />
      <CalculatorBody />
    </BudgetCalculatorWrapper>
  );
};

export default BudgetCalculator;