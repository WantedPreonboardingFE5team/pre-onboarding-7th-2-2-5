import styled from 'styled-components';
import Divider from '@mui/material/Divider';

const Summary = ({ props }) => {
  console.log('ad', props);
  return (
    <StSummary>
      <p>웹광고_425849923</p>
      <StList>
        <Divider />
        <StListItem>
          <StListTitle>상태</StListTitle>
          <StListContent>진행중</StListContent>
        </StListItem>
        <Divider />
        <StListItem>
          <StListTitle>광고 생성일 </StListTitle>
          <StListContent>2021-06-24</StListContent>
        </StListItem>
        <Divider />
        <StListItem>
          <StListTitle>일 희망 예산</StListTitle>
          <StListContent>40만원</StListContent>
        </StListItem>
        <Divider />
        <StListItem>
          <StListTitle>광고 수익률</StListTitle>
          <StListContent>656%</StListContent>
        </StListItem>
        <Divider />
        <StListItem>
          <StListTitle>매출</StListTitle>
          <StListContent>656%</StListContent>
        </StListItem>
        <Divider />
        <StListItem>
          <StListTitle>광고 비용</StListTitle>
          <StListContent>656%</StListContent>
        </StListItem>
        <Divider />
      </StList>
      <StButton>수정하기</StButton>
    </StSummary>
  );
};

export default Summary;

const StSummary = styled.div`
  width: 300px;
  padding: 40px 20px 20px 20px;

  border: 1px solid #d1d8dc;
  border-radius: 10px;

  p {
    font-size: 20px;
    font-weight: 700;
  }
`;

const StList = styled.div`
  margin-top: 40px;
`;

const StListItem = styled.div`
  padding: 10px 16px;
  p {
    font-size: 20px;
    font-weight: 700;
  }
  span {
    line-height: 2;
  }
`;

const StListTitle = styled.span`
  color: #94a2ad;
`;

const StListContent = styled.span`
  margin-left: 30px;
`;

const StButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;

  border: 1px solid #d1d8dc;
  background-color: white;
  border-radius: 10px;

  font-size: 17px;
  cursor: pointer;
`;
