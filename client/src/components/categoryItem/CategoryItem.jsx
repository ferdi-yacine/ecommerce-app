import { Link } from "react-router-dom";
import styled from "styled-components";
import "./categoryItem.css";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;

  @media screen and (max-width: 768px) {
    height: 60vh;
  }

  @media screen and (max-width: 480px) {
    height: 50vh;
  }
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <img className="iImg" alt="" src={item.img} />
        <div className="iInfo">
          <h1 className="iTitle">{item.title}</h1>
          <button className="iButton">SHOP NOW</button>
        </div>
      </Link>
    </Container>
  );
};

export default CategoryItem;
