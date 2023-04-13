import "./product.css";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover {
    opacity: 1;
  }

  @media screen and (max-width: 380px) {
    min-width: 200px;
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <div className="pCircle"></div>
      <img className="pImg" alt="" src={item?.img} />
      <div className="pInfo">
        <div className="pIcon">
          <ShoppingCartOutlined />
        </div>
        <div className="pIcon">
          <Link to={`/product/${item?._id}`}>
            <SearchOutlined />
          </Link>
        </div>
        <div className="pIcon">
          <FavoriteBorderOutlined />
        </div>
      </div>
    </Container>
  );
};

export default Product;
