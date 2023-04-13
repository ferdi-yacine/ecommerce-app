import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import "./slider.css";
import { sliderItems } from "../../data";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const navigate = useNavigate();

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    }
    if (direction === "right") {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  const handleDirect = () => {
    navigate("/products/dress");
  };

  return (
    <div className="sContainer">
      <div className="arrow arrowLeft" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </div>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <div className="slide" key={item.id}>
            <div className="imgContainer">
              <img className="sImg" alt="" src={item.img} />
            </div>
            <div className="infoContainer">
              <h1 className="sTitle">{item.title}</h1>
              <p className="sDesc">{item.desc}</p>
              <button className="sButton" onClick={handleDirect}>
                SHOP NOW!
              </button>
            </div>
          </div>
        ))}
      </Wrapper>
      <div className="arrow arrowRight" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </div>
    </div>
  );
};

export default Slider;
