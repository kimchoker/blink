import React, { useState } from "react";
import styled from "styled-components";
import sample from "../images/sample.webp";

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #eee;
  font-family: 'NanumBarunGothic';
`;

const Card = styled.div`
  background-size: cover;
  width: 220px;
  height: 310px;
  background-image: url(${sample});
  transition: transform 0.3s;
  transform: perspective(1000px) ${({ rotateX, rotateY }) => `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`};
`;

const Main = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (event) => {
    const card = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - card.left;
    const y = event.clientY - card.top;

    const halfWidth = card.width / 2;
    const halfHeight = card.height / 2;

    const rotateY = ((x - halfWidth) / halfWidth) * 20; // 좌우 회전 각도 조정
    const rotateX = -((y - halfHeight) / halfHeight) * 20; // 상하 회전 각도 조정

    setRotateX(rotateX);
    setRotateY(rotateY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <Background>
      <Card 
        onMouseMove={handleMouseMove} 
        onMouseLeave={handleMouseLeave}
        rotateX={rotateX} 
        rotateY={rotateY} 
      />
    </Background>
  );
}

export default Main;
