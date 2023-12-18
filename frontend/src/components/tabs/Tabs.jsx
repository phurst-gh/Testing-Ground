import React, { useState } from "react";
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
  background-color: ${({ isActive }) => (isActive ? 'white' : 'lightgrey')};
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
`;

const TabPanelStyled = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
`;

const TabButton = ({ label, onClick, isActive, disabled }) => {
return (
  <TabButtonStyled onClick={onClick} isActive={isActive} disabled={disabled}>
    {label}
  </TabButtonStyled>
)};

const TabPanel = ({ children }) => {
  return <TabPanelStyled>{children}</TabPanelStyled>;
};

const TabComponent = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState('register');

  const handleTabClick = type => {
    setActiveTab(type);
  };

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
                isActive={tab.label === activeTab}
              />
            ))}
          </div>
          <TabPanel>{tabs.find(tab => tab.label === activeTab).content}</TabPanel>
        </TabWrapper>
      )}
    </FormWrapper>
  );
};

export default TabComponent;
