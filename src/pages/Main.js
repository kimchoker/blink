import React, { useState } from "react";
import styled from "styled-components";
import sample from "../images/KY.png";
import { BsArrowClockwise } from "react-icons/bs";


const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #eee;
  font-family: 'NanumBarunGothic';
  
`;

const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div.attrs(props => ({
  style: {
    transform: `perspective(500px) rotateY(${props.rotatey}deg) rotateX(${props.rotatex}deg)`
  },
}))`
  will-change: transform;
  display: inline-grid;
  width: 300px;
  height: 440px;
  transition: transform 0.4s ease;
`;

const CardFront = styled.div.attrs(props => ({
  style: {
    transform: `perspective(800px) rotateY(${props.isflipped ? 0 : 180}deg)`,
    boxShadow: `${props.rotatey * 0.5}px ${props.rotatex * 0.5}px 20px rgba(0, 0, 0, 0.3)`
  },
}))`
  position: relative;
  grid-area: 1 / 1 / 1 / 1;
  background-size: cover;
  background-image: url(${sample});
  border-radius: 10px;
  transition: transform 0.6s ease, box-shadow 0.3s ease;

  &::after {
    display: ${props => props.display ? 'flex' : 'none'};
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background: linear-gradient(105deg, transparent 40%, rgba(132, 50, 255, 0.8) 45%, rgba(0, 123, 255, 0.6) 50%, transparent 54%);
    filter: brightness(1.2) opacity(0.5);
    mix-blend-mode: color-dodge;
    background-size: 160% 160%;
    background-position: ${props => props.position}%;
    transition: all 0.3s ease;
  }
`;

const CardBack = styled.div.attrs(props => ({
  style: {
    transform: `perspective(800px) rotateY(${props.isflipped ? 0 : 180}deg)`,
    boxShadow: `${props.rotatey * 0.5}px ${props.rotatex * 0.5}px 20px rgba(0, 0, 0, 0.3)`
  },
}))`
  grid-area: 1 / 1 / 1 / 1;
  width: 300px;
  height: 440px;
  background-color: pink;
  backface-visibility: hidden;
  border-radius: 10px;
  transition: transform 0.6s ease, box-shadow 0.3s ease;
`;


const FlipButton = styled.button`
  display: flex;
  width: 20%;
  justify-content: center;
	align-items: center;
	text-align: center;
	border: transparent;
	height: 35px;
	transition: all 0.3s ease;
	padding: 0.5rem;
  margin-top: 1rem;
  
  background-color: transparent;
`;



const FlipIcon = styled(BsArrowClockwise)`
  width: 100%;
  height: 100%;
  stroke-width: 1px;
  transition: transform 0.5s ease;
  transform: rotate(${({ isrotating }) => (isrotating ? "360deg" : null)});
`;

const BlinkButtonDiv = styled.div`

`;



const Main = () => {
  // 카드 기울임 설정 부분
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [position, setPosition] = useState(0);
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
  const [isRotating, setIsRotating] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    setIsRotating(true);

    setTimeout(() => {
      setIsRotating(false);
    }, 500);
  }



  
  return (
    <Background>
      <CardDiv>
        <Card
          onMouseMove={handleMouseMove} 
          onMouseLeave={handleMouseLeave}
          rotatex={rotateX} 
          rotatey={rotateY} 
        >
      
          <CardFront 
            isflipped={isFlipped ? 1 : 0}
            rotatex={rotateX} 
            rotatey={rotateY}
            position={position} 
            display={display? 1 : 0}
          />
          <CardBack
            isflipped={isFlipped? 1 : 0}
            rotatex={rotateX} 
            rotatey={rotateY} 
          />
        </Card>
  
        <FlipButton onClick={handleFlip}><FlipIcon isrotating={isRotating ? 1 : 0}/></FlipButton>

      </CardDiv>
      
    </Background>
  );
}

export default Main;


