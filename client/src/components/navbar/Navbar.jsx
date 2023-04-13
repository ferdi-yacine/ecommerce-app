import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import "./navbar.css";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/apiCalls";
import { useState } from "react";

const Container = styled.div`
  height: 60px;

  @media screen and (max-width: 480px) {
    height: 50px;
  }
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 480px) {
    padding: 10px 0px;
  }
`;

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    search ? navigate(`/products/${search}`) : navigate("/");
  };

  const handleLogout = (e) => {
    e.preventDefault();
    logoutUser(dispatch);
  };

  return (
    <Container>
      <Wrapper>
        <div className="navLeft">
          <span className="language">EN</span>
          <div className="searchContainer">
            <input
              placeholder="Search"
              className="navInput"
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="search" onClick={handleSearch}>
              <Search style={{ color: "grey", fontSize: 16 }} />
            </div>
          </div>
        </div>

        <div className="navCenter">
          <Link to="/">
            <h1 className="logo">YALLA.</h1>
          </Link>
        </div>

        <div className="navRight">
          {!user && (
            <Link to="/register">
              <div className="menuItem">REGISTER</div>{" "}
            </Link>
          )}
          {!user && (
            <Link to="/login">
              <div className="menuItem">SIGN IN</div>{" "}
            </Link>
          )}
          {user && (
            <div className="menuItem" onClick={handleLogout}>
              LOGOUT
            </div>
          )}

          <Link to="/cart">
            <div className="menuItem">
              <Badge badgeContent={cart.quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </div>
          </Link>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
