import React, { useState, useEffect } from "react";
import styled from "styled-components";

import FlashError from "../flashes/FlashError";

const FormWrapper = styled.div`
  input {
    display: block;
  }
`;

const TabWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const TabButtonStyled = styled.button`
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  /* background-color: ${({ active }) => (active ? 'white' : 'lightgrey')};
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')}; */
`;

const TabPanelStyled = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
`;

const TabButton = ({ label, onClick, disabled }) => {
return (
  <TabButtonStyled onClick={onClick} disabled={disabled}>
    {label}
  </TabButtonStyled>
)};

const TabPanel = ({ children }) => {
  return <TabPanelStyled>{children}</TabPanelStyled>;
};

const TabComponent = ({ tabs }) => {
  const [activeLabel, setActiveLabel] = useState();

  const handleTabClick = label => {
    setActiveLabel(label);
  };

  useEffect(() => {
    setActiveLabel(tabs[0].label);
  }, [tabs]);


  return (
    <FormWrapper>
      {tabs && (
        <TabWrapper>
          <div>
            {tabs.map((tab, i) => (
              <TabButton
                key={i}
                label={tab.label}
                onClick={() => handleTabClick(tab.label)}
              />
            ))}
          </div>
          <TabPanel>{tabs.find(tab => tab.label === activeLabel)?.content}</TabPanel>
        </TabWrapper>
      )}
    </FormWrapper>
  );
};

export default TabComponent;
