import styled from "styled-components";

const Container = styled.div`
  background-color: teal;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Super Deal! Free shipping on Order Over $50</Container>;
};

export default Announcement;
