import React, { useState } from "react";
import styled from "styled-components";
import sample from "../images/KY.png";

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #eee;
  font-family: 'NanumBarunGothic';
  
`;

const Card = styled.div`
  will-change: transform;
  display: inline-grid;
  transform: perspective(500px) ${({ rotateX, rotateY }) => `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`};
  width: 300px;
  height: 440px;
  transition: transform 0.4s ease;
`;

const CardFront = styled.div`
  position: relative;
  grid-area: 1 / 1 / 1 / 1;
  background-size: cover;
  background-image: url(${sample});
  transform: perspective(800px) rotateY(${props => props.isFlipped ? 0 : 180}deg);
  border-radius: 10px;
  box-shadow: ${({ rotateX, rotateY }) => `${rotateY * 0.5}px ${rotateX * 0.5}px 20px rgba(0, 0, 0, 0.3)`};
  transition: transform 0.6s ease, box-shadow 0.3s ease;
  &::after {
    display: ${props=> props.display? 'flex' : 'none'};
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(105deg,
      transparent 40%,
      rgba(132, 50, 255, 0.8) 45%,
      rgba(0, 123, 255, 0.6) 50%,
      transparent 54%);
    filter: brightness(1.2) opacity(0.5);
    mix-blend-mode: color-dodge;
    background-size: 160% 160%;
    background-position: ${props => props.position}%;
    transition: all 0.3s ease;
  }
`;

const CardBack = styled.div`
  grid-area: 1 / 1 / 1 / 1;
  width: 300px;
  height: 440px;
  background-color: pink;
  backface-visibility: hidden;
  transform: perspective(800px) rotateY(${props => props.isFlipped ? 0 : 180}deg);
  border-radius: 10px;
  box-shadow: ${({ rotateX, rotateY }) => `${rotateY * 0.5}px ${rotateX * 0.5}px 20px rgba(0, 0, 0, 0.3)`};
  transition: transform 0.6s ease, box-shadow 0.3s ease;
`;



const Button = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
`;

const Main = () => {
  // 카드 기울임 설정 부분
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [position, setPosition] = useState(false);
  const [display, setDisplay] = useState(false);
  

  const handleMouseMove = (event) => {
    const card = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - card.left;
    const y = event.clientY - card.top;

    const halfWidth = card.width / 2;
    const halfHeight = card.height / 2;

    const rotateY = ((x - halfWidth) / halfWidth) * 20; // 좌우 회전 각도 조정
    const rotateX = -((y - halfHeight) / halfHeight) * 20; // 상하 회전 각도 조정
    const brightness = x + y/3;
    setDisplay(true);
    setPosition(brightness);
    setRotateX(rotateX);
    setRotateY(rotateY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setPosition(0);
    setDisplay(false);
  };

  // 카드 뒷면으로 뒤집는 기능
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  }

  
  return (
    <Background>
      
      <Card
        onMouseMove={handleMouseMove} 
        onMouseLeave={handleMouseLeave}
        rotateX={rotateX} 
        rotateY={rotateY} 
      >
        {/* <Overlay 
          position={position}
          rotateX={rotateX} 
          rotateY={rotateY} /> */}
        <CardFront 
          isFlipped={isFlipped}
          rotateX={rotateX} 
          rotateY={rotateY}
          position={position} 
          display={display}
        />
        <CardBack
          isFlipped={isFlipped}
          rotateX={rotateX} 
          rotateY={rotateY} 
        />
      </Card>
      
      <Button onClick={handleFlip}>Flip</Button>
    </Background>
  );
}

export default Main;
