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

const TabPanelStyled = styled.div`
  background: white;
  border: 1px solid #ccc;
  width: 40vw;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
`;

const TabButtonStyled = styled.button`
  border: 1px solid #ccc;
  flex-grow: 1;
  width: 40vw;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  cursor: pointer;
  /* background-color: ${({ active }) => (active ? "white" : "lightgrey")};
  font-weight: ${({ active }) => (active ? "bold" : "normal")}; */
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
