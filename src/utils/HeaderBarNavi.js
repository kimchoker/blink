import { styled } from 'styled-components';
import { useNavigate } from "react-router";



const MainDiv = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 23px;
  background-color: transparent;
  color: black;
  transition: background-color 0.5s ease;
  position: fixed;
  border-bottom: 1px solid #EEEDEB;
  padding: 20px;
`;

const Name = styled.div`
  font-family: 'DNFBitBitv2';
  &:hover {
    cursor: pointer;
  }
`

const Login = styled.div`
  font-family: 'NanumBarunGothic';
  font-size: 1rem;
  color: gray;
  &:hover {
    cursor: pointer;
  }
`;


const HeaderBar = (props) => {
  const navigate = useNavigate();

  

  return (
    <MainDiv>
      <Name>
      <p onClick={() => navigate('/')}>blink</p>
      </Name>
      <Login>
        <p onClick={() => navigate('/login')}>로그인</p>
      </Login>
    </MainDiv>
  );
};

export default HeaderBar;
