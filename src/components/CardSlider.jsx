import React, { useState } from "react";
import Card from "./Card";
import styled from "styled-components";
import { useRef } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
export default function CardSlider({ data, title }) {
  const [showControls, setShowControls] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(0);
  const listRef = useRef(null);
  const handleDirection = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 70;
    if (direction === "left" && sliderPosition > 0) {
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
      setSliderPosition(sliderPosition - 1);
    }
    if (direction === "right" && sliderPosition < 4) {
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
      setSliderPosition(sliderPosition + 1);
    }
  };
  return (
    <Container className="flex column"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <h1>{title}</h1>
      <div className="wrapper">
        <div
          className={`slider-action left ${!showControls ? "none" : ""
            }flex j-center a-center`}
        >
          <AiOutlineLeft onClick={() => handleDirection("left")} />
        </div>
        <div className="flex slider" ref={listRef}>
          {data.map((movie, index) => {
            return <Card movieData={movie} index={index} key={movie.id} />;
          })}
        </div>
        <div className={`slider-action right ${!showControls ? "none" : ""
          }flex j-center a-center`}
        >
          <AiOutlineRight onClick={() => handleDirection("right")} />
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`

gap: 1rem;
position: relative;
padding: 2rem 0;
h1 {
    margin-left: 50px;
}
.wrapper {
    position: relative;
    display: flex;
    align-items: center;
    
    .slider {
        width: max-content;
        gap: 1rem;
        transform: translateX(0px);
        transition: 0.3s ease-in-out;
        
    }
     .slider-action {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 99;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      cursor: pointer;
      transition: opacity 0.3s ease-in-out;
        svg {
            font-size: 2rem;
            color: white;
        }
       &:hover {
        opacity: 0.7;
      }
    }
    .none {
        display: none;
    }
    .left{
        left: 0;
    }
    .right{
        right: 0;
    }
}
`;
