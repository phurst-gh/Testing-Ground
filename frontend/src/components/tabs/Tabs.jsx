import React, { useState, useEffect } from "react";
import styled from "styled-components";

const TabWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 10px;
  height: 420px;
  max-width: 96vw;
`;

const TabButtonWrapper = styled.div`
  display: flex;
`;

const TabButtonStyled = styled.button`
  padding: 10px;
  border: 1px solid #ccc;
  flex-grow: 1;
  width: 40vw;
  cursor: pointer;
  /* background-color: ${({ active }) => (active ? "white" : "lightgrey")};
  font-weight: ${({ active }) => (active ? "bold" : "normal")}; */
  `;

const TabPanelStyled = styled.div`
  background: white;
  border: 1px solid #ccc;
  padding: 10px;
  width: 40vw;
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
        <TabPanel>
          {tabs.find((tab) => tab.label === activeLabel)?.content}
        </TabPanel>

        <TabButtonWrapper>
          {tabs.map((tab, i) => (
            activeLabel !== tab.label && (
              <TabButton
                key={i}
                label={tab.label}
                onClick={() => handleTabClick(tab.label)}
              />
            )
          ))}
        </TabButtonWrapper>
      </TabWrapper>
    )
  );
};

export default TabComponent;
