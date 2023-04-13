import { Send } from "@material-ui/icons";
import styled from "styled-components";
import "./newsLetter.css";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function NewsLetter() {
  return (
    <Container>
      <h1 className="nlTittle">NewsLetter</h1>
      <div className="nlDesc">Get timely from your favorite products.</div>
      <div className="inputContainer">
        <input placeholder="Your email" className="nlInput" />
        <button className="nlButton">
          <Send />
        </button>
      </div>
    </Container>
  );
}

export default NewsLetter;
