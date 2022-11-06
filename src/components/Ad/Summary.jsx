import styled from 'styled-components';
import Divider from '@mui/material/Divider';
import { getStatus, getDate } from '../../utils';
import SummaryItem from './SummaryItem';

const Summary = ({ props }) => {
  const isEnded = !!props?.endDate;
  console.log(props);

  return (
    <StSummary>
      {props?.adType === 'web' ? <p>웹광고_{props?.title}</p> : <p>앱광고_{props?.title}</p>}
      <StList>
        <Divider />
        <SummaryItem title="상태" content={getStatus[props?.status]} />
        <Divider />
        <SummaryItem
          title="광고 생성일"
          content={isEnded ? `${getDate(props?.startDate)} (${getDate(props?.endDate)})` : getDate(props?.startDate)}
        />
        <Divider />
        <SummaryItem title="일 희망 예산" content={props?.budget} />
        <Divider />
        <SummaryItem title="광고 수익률" content={`${props?.report.roas}%`} />
        <Divider />
        <SummaryItem title="매출" content={props?.report.convValue} />
        <Divider />
        <SummaryItem title="광고 비용" content={props?.report.cost} />
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

const StButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;

  border: 1px solid #d1d8dc;
  background-color: white;
  border-radius: 10px;

  cursor: pointer;
`;
