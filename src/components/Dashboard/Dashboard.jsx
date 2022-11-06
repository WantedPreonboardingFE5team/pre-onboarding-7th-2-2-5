import styled from 'styled-components';
import Chart from './Chart';

const Dashboard = () => {
  return (
    <StDashboard>
      <p>통합 광고 현황</p>
      <StAdContainer>
        <Chart />
      </StAdContainer>
    </StDashboard>
  );
};

export default Dashboard;

const StDashboard = styled.div`
  margin: 20px 40px;
  p {
    color: #3a474e;
    font-weight: 700;
  }
`;

const StAdContainer = styled.div`
  border-radius: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  background-color: white;

  height: 650px;
  margin: 20px 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;
