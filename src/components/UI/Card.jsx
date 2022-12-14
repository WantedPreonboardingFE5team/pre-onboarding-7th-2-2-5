import styled from 'styled-components';

const Card = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export default Card;

const Container = styled.div`
  width: 305px;
  height: 420px;
  padding: 0.5rem;
  margin-bottom: 20px;
  border: ${({ primary }) => (primary ? '1px solid var(--color-primary)' : '1px solid lightgray')};
  border-radius: 10px;
`;
