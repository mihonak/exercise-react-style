import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <Container>
      <Title>Styled Components</Title>
      <Button>huh</Button>
    </Container>
  );
};

const Container = styled.div`
  border: solid 2px lightgreen;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Title = styled.p`
  margin: 0;
  color: darkgreen;
`;
const Button = styled.button`
  background-color: palegreen;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: lawngreen;
    color: white;
    cursor: pointer;
  }
`;
