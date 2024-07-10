import React, { useState } from "react";
import styled from "styled-components";
import sample from "../images/KY.png";
import { BsArrowClockwise } from "react-icons/bs";


const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: transparent;
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
    transform: `perspective(500px) rotateY(${props.$rotatey}deg) rotateX(${props.$rotatex}deg)`,
    
  },
}))`
  will-change: transform;
  display: inline-grid;
  width: 250px;
  height: 367px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 10px;

`;

const FrontDiv = styled.div`
  position: relative;
  grid-area: 1 / 1 / 1 / 1;
`;

const CardFront = styled.div.attrs(props => ({
  style: {
    transform: `perspective(800px) rotateY(${props.$isflipped ? 0 : 180}deg)`,
    boxShadow: `${props.$rotatey * 0.5}px ${props.$rotatex * 0.5}px 20px rgba(0, 0, 0, 0.3)`
  },
}))`
  background-size: cover;
  background-image: url(${sample});
  border-radius: 10px;
  transition: all 0.3s ease, box-shadow 0.3s ease;
  will-change: transform;
  width: 100%;
  height: 100%;
  
`;

const Style1 = styled.div.attrs(props => ({
  style: {
    display: props.display.active === true && props.display.style === '1' ? 'flex' : 'none',
    backgroundPosition: `${props.$position.x}% ${props.$position.y}%`
    
  }
}))`
  position: absolute;
  background: linear-gradient(105deg, transparent 40%, rgba(132, 50, 255, 0.8) 45%, rgba(0, 123, 255, 0.6) 50%, transparent 54%);
  mix-Blend-Mode: color-dodge;
  background-Size: 150% 150%;
  filter: brightness(1.2) opacity(0.5);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  transition: all 0.3s ease;
  will-change: transform;
`;

const Style2 = styled.div.attrs(props => ({
  style: {
    display: props.display.active && props.display.style === '2' ? 'flex' : 'none',
    background: `radial-gradient(circle at ${props.$position.x}% ${props.$position.y}%, hsl(180, 100%, 95%) 5%, hsla(0, 0%, 39%, 0.25) 55%, hsla(0, 0%, 0%, 0.36) 110%)`
  }
}))`
  position: fixed;
  mix-blend-mode: overlay;
  filter: brightness(0.7) contrast(1);
  background-size: 100% 100%;
  background-position: 100%;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;  

const Style3Div = styled.div`

`;

const Style3 = styled.div.attrs(props => ({
  style: {
    display: props.display.active === true && props.display.style === '3' ? 'flex' : 'none',
    background: 'repeating-linear-gradient(-22deg, hsla(283, 49%, 60%, 0.75) 5%, hsla(2, 74%, 59%, 0.75) 10%, hsla(53, 67%, 53%, 0.75) 15%, hsla(93, 56%, 52%, 0.75) 20%, hsla(176, 38%, 50%, 0.75) 25%, hsla(228, 100%, 77%, 0.75) 30%, hsla(283, 49%, 61%, 0.75) 35%',
    mixBlendMode: 'soft-light',
    backgroundSize: '15% 10%',
    filter: `brightness((${props.$center} * 0.3) + 0.5) contrast(2.5) saturate(1)`,
    backgroundPosition: `${props.$position.x * 2}px ${props.$position.y * 2}px, ${props.$position.x * 2}px ${props.$position.y * 2}px`,

  }
}))`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  transition: all 0.3s ease;
  will-change: background-position;
  background-color: rgba(255, 255, 255, 0.2);
`;

const Style3Glare = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  
  background-image: 
    radial-gradient( 
      farthest-corner ellipse at calc((${props => props.$position.x} * 0.5 + 25%)) calc((${props => props.$position.y} * 0.5 + 25%)), 
      hsl(0, 0%, 100%) 5%, 
      hsla(300, 100%, 11%, 0.6) 40%, 
      hsl(0, 0%, 22%) 120% 
    );

  background-position: center center;
  background-size: 400% 500%;
  filter: brightness(calc(${props => props.$center} * 0.2 + 0.4)) contrast(5) saturate(1.1);
  mix-blend-mode: hard-light;
  border-radius: 10px;
`;


const Style4 = styled.div`
  --space: 6%;
  --angle: 133deg;
  --imgsize: cover;

  background-image:
    repeating-linear-gradient( -33deg, 
      hsl(2, 70%, 47%) calc(var(--space)*1),  
      hsl(228, 60%, 64%) calc(var(--space)*2), 
      hsl(176, 55%, 39%) calc(var(--space)*3), 
      hsl(123, 68%, 35%) calc(var(--space)*4), 
      hsl(283, 75%, 57%) calc(var(--space)*5), 
      hsl(2, 70%, 47%) calc(var(--space)*6)
    ),
    repeating-linear-gradient( 
      var(--angle), 
      hsla(227, 53%, 12%, 0.5) 0%, 
      hsl(180, 10%, 50%) 2.5%, 
      hsl(83, 50%, 35%) 5%, 
      hsl(180, 10%, 50%) 7.5%, 
      hsla(227, 53%, 12%, 0.5) 10% , 
      hsla(227, 53%, 12%, 0.5) 15% 
      ),
    radial-gradient(
      farthest-corner circle 
      at var(--pointer-x) var(--pointer-y),
      hsla(189, 76%, 77%, 0.6) 0%, 
      hsla(147, 59%, 77%, 0.6) 25%, 
      hsla(271, 55%, 69%, 0.6) 50%, 
      hsla(355, 56%, 72%, 0.6) 75%
    );

  background-blend-mode: difference, luminosity, soft-light;
  background-size: var(--imgsize), 1100% 1100%, 600% 600%, 200% 200%;
  background-position: 
    center, 
    var(--background-x) var(--background-y), 
    var(--background-x) var(--background-y), 
    var(--background-x) var(--background-y);

  filter: brightness(calc((var(--pointer-from-center) * .4) + .4)) contrast(2) saturate(1);
`;

const CardBack = styled.div.attrs(props => ({
  style: {
    transform: `perspective(800px) rotateY(${props.$isflipped ? 0 : 180}deg)`,
    boxShadow: `${props.$rotatey * 0.5}px ${props.$rotatex * 0.5}px 20px rgba(0, 0, 0, 0.3)`
  },
}))`
  grid-area: 1 / 1 / 1 / 1;
  width: 250px;
  height: 367px;
  background-color: pink;
  backface-visibility: hidden;
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  will-change: transform, box-shadow;
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
  width: 100%;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SelectButton = styled.button`
  width: 30px;
  height: 30px;
  line-height: 30px;
  border: transparent;
  border-radius: 5px;
  background-color: #B4B4B8;
  color: white;
  margin: 0.5rem;
  text-align: center;
  transition: all 0.3s ease;
  padding-bottom: 0;
  &:hover {
    background-color: black;
  }

  p {
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

const Cards = () => {
  // 카드 기울임 설정 부분
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [display, setDisplay] = useState({active: false, style: 1});

  // 스타일 계산 부분
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const [whichStyle, setWhichStyle] = useState(1);

  const handleButton = (buttonName) => {
    setWhichStyle(buttonName);
    setDisplay(prevState => ({...prevState, style:buttonName}));
    console.log(display)
  }

  const [fromCenter, setFromCenter] = useState(0);


  const handleMouseMove = (event) => {
    let card = event.currentTarget.getBoundingClientRect();
    let x = event.clientX - card.left;
    let y = event.clientY - card.top;

    let halfWidth = card.width / 2;
    let halfHeight = card.height / 2;

    let width = card.width;
    let height = card.height;

    let rotateY = -((x - halfWidth) / halfWidth) * 20; // 좌우 회전 각도 조정
    let rotateX = ((y - halfHeight) / halfHeight) * 20; // 상하 회전 각도 조정


    
    setDisplay(prevState => ({...prevState, active:true}));
    setRotateX(rotateX);
    setRotateY(rotateY);

    // 버튼 선택값에 따라 해당 계산 수행
    if (whichStyle === '1') {
        // 1번
        const brightness = x + y / 3;
        setPosition({ x: brightness, y: 50 });
    } else if (whichStyle === '2') {
      const positionX = (x / card.width) * 100;
      const positionY = (y / card.height) * 100;
      setPosition({ x: positionX, y: positionY });
      
    } else if (whichStyle === '3') {
        const positionX = (x / card.width) * 100;
        const positionY = (y / card.height) * 100;
        setPosition({ x: positionX, y: positionY });
        let distanceFromCenter = Math.sqrt(Math.pow(x - halfWidth, 2) + Math.pow(y - halfHeight, 2));
        let maxDistance = Math.sqrt(Math.pow(halfWidth, 2) + Math.pow(halfHeight, 2));
        let pointerFromCenter = distanceFromCenter / maxDistance;
        setFromCenter(pointerFromCenter);
    } else if (whichStyle === '4') {
        // 4번
        // 여기에 4번 계산 코드 추가
    }
};




  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setPosition({ x : 0, y : 0 });
    setDisplay(prevState => ({...prevState, active:false}));
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
          $rotatex={rotateX}
          $rotatey={rotateY}
        >
          <FrontDiv>
            <CardFront
              $isflipped={isFlipped ? 1 : 0}
              $rotatex={rotateX}
              $rotatey={rotateY}
            />
            <Style1
              display={display}
              $position={position}
            />
            <Style2
              display={display}
              $position={position}
            />
            <Style3Div>
              <Style3
                display={display}
                $position={position}
                $center={fromCenter}
              />
              <Style3Glare
                $position={position}
                $center={fromCenter}
              />
            </Style3Div>
            <Style4
              display={display}
              $position={position}
            />
          </FrontDiv>
          <CardBack
            $isflipped={isFlipped ? 1 : 0}
            $rotatex={rotateX}
            $rotatey={rotateY}
          />
        </Card>
      </CardDiv>
    </Background>
  );
}

export default Cards;
