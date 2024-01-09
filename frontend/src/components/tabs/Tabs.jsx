import React, { useState, useEffect } from "react";
import styled from "styled-components";

const TabWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  max-width: 200px;
`;

const TabButtonWrapper = styled.div`
  display: flex;
`;

const TabButtonStyled = styled.button`
  padding: 10px;
  border: 1px solid #ccc;
  flex-grow: 1;
  /* background-color: ${({ active }) => (active ? "white" : "lightgrey")};
  font-weight: ${({ active }) => (active ? "bold" : "normal")}; */
`;

const TabPanelStyled = styled.div`
  border: 1px solid #ccc;
  max-width: 200px;
  padding: 10px;
`;

const TabButton = ({ label, onClick, disabled }) => {
  return (
    <TabButtonStyled onClick={onClick} disabled={disabled}>
      {label}
    </TabButtonStyled>
  );
};

const TabPanel = ({ children }) => {
  return <TabPanelStyled>{children}</TabPanelStyled>;
};

const TabComponent = ({ tabs }) => {
  const [activeLabel, setActiveLabel] = useState();

  const handleTabClick = (label) => {
    setActiveLabel(label);
  };

  useEffect(() => {
    setActiveLabel(tabs[0].label);
  }, [tabs]);

  return (
    tabs && (
      <TabWrapper>
        <TabButtonWrapper>
          {tabs.map((tab, i) => (
            <TabButton
              key={i}
              label={tab.label}
              onClick={() => handleTabClick(tab.label)}
            />
          ))}
        </TabButtonWrapper>
        <TabPanel>
          {tabs.find((tab) => tab.label === activeLabel)?.content}
        </TabPanel>
      </TabWrapper>
    )
  );
};

export default TabComponent;
