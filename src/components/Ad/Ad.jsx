import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { getStatus } from '../../utils/index';
import Summary from './Summary';

const Ad = () => {
  const ads = useSelector((state) => state);
  const dispatch = useDispatch();
  const [adList, setAdList] = useState(ads);

  const selectHandel = (e) => {
    const { value } = e.target;

    switch (value) {
      case getStatus.ACTIVE:
        return setAdList(ads?.filter((ad) => ad?.status === getStatus.ACTIVE));
      case getStatus.ENDED:
        return setAdList(ads?.filter((ad) => ad?.status === getStatus.ENDED));
      default:
        return setAdList(ads);
    }
  };

  return (
    <StAdd>
      <StMenu>
        <StSelect onChange={selectHandel}>
          <option value={getStatus.TOTAL}>전체 광고</option>
          <option value={getStatus.ACTIVE}>진행 중 광고</option>
          <option value={getStatus.ENDED}>중단 광고</option>
        </StSelect>
        <StButton>광고 만들기</StButton>
      </StMenu>
      <StAdWrapper>
        {adList?.map((ad) => (
          <Summary key={ad.id} props={ad} />
        ))}
      </StAdWrapper>
    </StAdd>
  );
};

export default Ad;

const StAdd = styled.div`
  border-radius: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  background-color: white;

  height: fit-content;
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
  display: flex;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 20px;
`;
