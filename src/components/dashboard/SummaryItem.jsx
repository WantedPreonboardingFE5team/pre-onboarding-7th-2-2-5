import React from 'react';
import styled from 'styled-components';

const SummaryItem = () => {
  return (
    <StContainer>
      <StTitleAndIncrement>
        <StTitle>ROAS</StTitle>
        <StIncrement>
          <StValue>697%</StValue>
          <StPercentage>18%</StPercentage>
        </StIncrement>
      </StTitleAndIncrement>
    </StContainer>
  );
};

export default SummaryItem;

const StContainer = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 304px;
  height: 79px;
  margin-bottom: 20px;
  padding: 0 40px;
  align-items: center;
  border: 1px solid #edeff1;
  border-radius: 10px;
`;

const StTitleAndIncrement = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const StTitle = styled.span`
  margin-bottom: 10px;
  color: #94a2ad;
  font-size: 12px;
  font-weight: 500;
`;

const StIncrement = styled.div`
  display: flex;
  flex: 1 0 1;
  justify-content: space-between;
  align-items: center;
`;

const StValue = styled.span`
  color: #3a474e;
  font-size: 16px;
  font-weight: 700;
`;

const StPercentage = styled.span`
  color: #94a2ad;
  font-size: 12px;
  font-weight: 500;
`;