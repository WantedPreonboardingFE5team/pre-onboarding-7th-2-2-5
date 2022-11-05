import styled from 'styled-components';

const Title = ({ text, picker }) => {
  return (
    <StTitle>
      <p>{text}</p>
      {picker && <span>'date time picker'</span>}
    </StTitle>
  );
};

export default Title;

const StTitle = styled.div`
  margin: 40px 25px;
  height: 40px;

  p {
    display: inline;
    color: #3a474e;
    font-size: 26px;
    font-weight: 900;
    margin-right: 700px;
  }
`;
