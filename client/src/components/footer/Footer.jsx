import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import "./footer.css";

const Container = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <div className="leftContainer">
        <h1 className="fLogo">YALLA</h1>
        <p className="fDesc">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
        <div className="socialContainer">
          <div
            className="socialIcon fIcon"
            onClick={() =>
              window.open("https://www.facebook.com/yallaservices1", "_blank")
            }
          >
            <Facebook />
          </div>
          <div
            className="socialIcon InstIcon"
            onClick={() =>
              window.open("https://www.instagram.com/yallaservice/", "_blank")
            }
          >
            <Instagram />
          </div>
          <div className="socialIcon twtIcon">
            <Twitter />
          </div>
          <div className="socialIcon pinIcon">
            <Pinterest />
          </div>
        </div>
      </div>
      <div className="centerContainer">
        <h3 className="fTitle">Useful Links</h3>
        <ul className="fList">
          <li className="fListItem">Home</li>
          <li className="fListItem">Cart</li>
          <li className="fListItem">Man fashion</li>
          <li className="fListItem">Woman fashion</li>
          <li className="fListItem">Accessories</li>
          <li className="fListItem">My account</li>
          <li className="fListItem">Order Tracking</li>
          <li className="fListItem">Wishlist</li>
          <li className="fListItem">Terms</li>
        </ul>
      </div>
      <div className="rightContainer">
        <h3 className="fTitle">Contact</h3>
        <div className="contactItem">
          <Room style={{ marginRight: "10px" }} /> 622 Dixie Path , South
          Tobichester 98336
        </div>
        <div className="contactItem">
          <Phone style={{ marginRight: "10px" }} /> +213 775 85 47 85
        </div>
        <div className="contactItem">
          <MailOutline style={{ marginRight: "10px" }} />{" "}
          Yalla.services17@gmail.com
        </div>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </div>
    </Container>
  );
};

export default Footer;
