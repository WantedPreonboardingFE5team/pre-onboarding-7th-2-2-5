import styled from 'styled-components';
import Summary from './Summary';
import adList from '../../db/ad_list.json';
import { useState } from 'react';

const Ad = () => {
  const [ads, setAds] = useState(adList.ads);
  console.log('ads', ads);

  return (
    <StAdd>
      <StMenu>
        <StSelect>
          <option value="filter">전체 광고</option>
          <option value="filter">진행 중 광고</option>
          <option value="filter">중단 광고</option>
        </StSelect>
        <StButton>광고 만들기</StButton>
      </StMenu>
      <StAdWrapper>
        {ads.map((ad, index) => (
          <Summary key={ad.id} />
        ))}
        <Summary />
        <Summary />
        <Summary />
        <Summary />
        <Summary />
      </StAdWrapper>
    </StAdd>
  );
};

export default Ad;

const StAdd = styled.div`
  border-radius: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  background-color: white;

  height: 650px;
  margin: 20px 40px;

  padding: 40px;
`;

const StMenu = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 40px;
`;

const StSelect = styled.select`
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

const StButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;

  border: none;
  border-radius: 5px;

  background-color: #586cf5;

  color: white;
  font-size: 17px;
  cursor: pointer;
`;

const StAdWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  row-gap: 20px;
`;
