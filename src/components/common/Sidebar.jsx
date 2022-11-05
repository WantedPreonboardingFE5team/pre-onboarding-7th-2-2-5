import styled from 'styled-components';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import AddchartIcon from '@mui/icons-material/Addchart';

const Sidebar = () => {
  return (
    <StContainer className="sidebar">
      <Logo>
        <img src="https://lever.me/img/logo-black.svg" alt="logo" />
      </Logo>
      <StHr />
      <StMenu>
        <p>서비스</p>
        <StSelect>
          <option value="service">매드업</option>
          <option value="service">서비스 추가하기</option>
        </StSelect>
      </StMenu>
      <StMenu>
        <p>광고 센터</p>
        <StButton color="palette.grey.800">
          <InsertChartIcon />
          대시보드
        </StButton>
        <StButton>
          <AddchartIcon />
          광고관리
        </StButton>
      </StMenu>
    </StContainer>
  );
};

export default Sidebar;

const StContainer = styled.div`
  padding: 60px 40px;
`;

const Logo = styled.div`
  width: 120px;
  height: 30px;
`;

const StHr = styled.div`
  box-sizing: border-box;
  border: 1px solid #edeff1;
  width: 240px;
  height: 0;
  margin: 40px 0;
`;

const StMenu = styled.div`
  margin-bottom: 60px;
  p {
    color: #94a2ad;
    font-size: 12px;
    margin-bottom: 13px;
  }
`;

const StSelect = styled.select`
  padding: 10px 120px 10px 10px;
  border-radius: 5px;
  cursor: pointer;
`;

const StButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;

  border: none;
  border-radius: 5px;

  background-color: white;

  color: #3a474e;
  font-size: 17px;
  cursor: pointer;

  svg {
    margin-right: 10px;
  }
`;
