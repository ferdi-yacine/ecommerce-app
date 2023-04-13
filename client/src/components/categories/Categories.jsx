import "./categories.css";
import { categories } from "../../data";
import CategoryItem from "../categoryItem/CategoryItem";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    flex-direction: column;
  }
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
