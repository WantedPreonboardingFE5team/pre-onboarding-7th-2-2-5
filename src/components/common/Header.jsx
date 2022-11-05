import styled from 'styled-components';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
  return (
    <StHeader>
      <NotificationsNoneIcon />
      <SettingsIcon />
      <AccountCircleIcon />
      <span>원티드님</span>
    </StHeader>
  );
};

export default Header;

const StHeader = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;

  height: 80px;
  border-bottom: 1px solid #edeff1;

  svg {
    margin-left: 30px;
  }

  span {
    margin-left: 5px;
    margin-right: 40px;
  }
`;
