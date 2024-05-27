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
    transform: `perspective(500px) rotateY(${props.$rotatey}deg) rotateX(${props.$rotatex}deg)`,
    
  },
}))`
  will-change: transform;
  display: inline-grid;
  width: 300px;
  height: 440px;
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



const Style3 = styled.div.attrs(props => ({
  style: {
    display: props.display.active === true && props.display.style === '3' ? 'flex' : 'none',
    background: 'radial-gradient(circle, white , transparent)',
    // mixBlendMode: 'color-dodge',
    backgroundSize: '100% 100%',
    filter: 'brightness(2.0) opacity(0.3)',
    transform: `translate(-${props.$position.x}px, ${props.$position.y}px)`,
    backgroundRepeat: 'no-repeat'
  }
}))`
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  transition:  0.3s ease;
  will-change: transform;
  
`;


const CardBack = styled.div.attrs(props => ({
  style: {
    transform: `perspective(800px) rotateY(${props.$isflipped ? 0 : 180}deg)`,
    boxShadow: `${props.$rotatey * 0.5}px ${props.$rotatex * 0.5}px 20px rgba(0, 0, 0, 0.3)`
  },
}))`
  grid-area: 1 / 1 / 1 / 1;
  width: 300px;
  height: 440px;
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

const Main = () => {
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

  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);



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
        // 3번
        // 여기에 3번 계산 코드 추가
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
          </FrontDiv>
          <CardBack
            $isflipped={isFlipped ? 1 : 0}
            $rotatex={rotateX}
            $rotatey={rotateY}
          />
        </Card>

        <FlipButton onClick={handleFlip}>
          <FlipIcon isrotating={isRotating ? 1 : 0} />
        </FlipButton>
        <BlinkButtonDiv>
          <div>
            {['1', '2', '3', '4'].map((buttonName) => (
              <SelectButton
                key={buttonName}
                $isselected={whichStyle === buttonName ? 1 : 0}
                onClick={() => handleButton(buttonName)}
              >
                {buttonName}
              </SelectButton>
            ))}
          </div>
        </BlinkButtonDiv>
      </CardDiv>
    </Background>
  );
}

export default Main;
