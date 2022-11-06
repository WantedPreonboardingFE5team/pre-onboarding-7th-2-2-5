import styled from 'styled-components';
const SummaryItem = ({ title, content }) => {
  return (
    <StListItem>
      <StListTitle> {title}</StListTitle>
      <StListContent>{content}</StListContent>
    </StListItem>
  );
};

export default SummaryItem;

const StListItem = styled.div`
  width: 93%;
  /* width: 300px; */
  margin: auto;
  display: flex;
  font-size: 14px;
  align-items: center;
`;

const StListTitle = styled.div`
  font-size: 15px;
  color: #94a2ad;
  color: gray;
  width: 110px;
`;

const StListContent = styled.div`
  font-size: 15px;
  padding: 13px 0;
`;
