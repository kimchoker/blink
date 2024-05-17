import  { React, useState, useEffect } from "react";
import { styled } from "styled-components";
import { BsEnvelope, BsLock } from "react-icons/bs";
import btnD from '../images/btnD.png'

const Background = styled.div`
	display: flex;
	justify-content: center; /* 수평 중앙 정렬 */
	align-items: center; /* 수직 중앙 정렬 */
	height: 100vh;
	background-color: #EEEDEB;
	font-family: 'NanumBarunGothic';
`;

const LoginBox = styled.div`
	display: flex;
	justify-content: center; /* 수평 중앙 정렬 */
	align-items: center; /* 수직 중앙 정렬 */

	height: 60%;
	width: 40%;
	min-width: 300px;
	min-height: 500px;
	max-width: 600px;
	background-color: white;
`

const LoginCol = styled.div`
	width: 80%;
	display: flex;
	flex-direction: column;

	h5 {
		font-weight: bold;
	}
`;

const LabelDiv = styled.div`
	margin-bottom: 1rem;
	display: flex;
	flex-direction: column;
`;

const Label = styled.label`
	margin-bottom: 0.5rem; 
	font-weight: bold;
	font-size: 0.8rem;
	
`;

const Input = styled.input`
	width: 100%;
	padding: 0.5rem;
	box-sizing: border-box;
	margin-left: 0.5rem;
	border: none;
	background-color: transparent;
	
		&:focus {
			outline: none;
		}
`;

const Relative = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	padding: 0.5rem;
	height: 35px;
	transition: background-color 0.5s ease;
	border: ${props => props.clicked && !props.validate ? '2px solid red' : props.clicked && props.validate ? '2px solid black' : props.clicked ? '2px solid black' : '1px solid #E3E1D9'};
	background-color: ${props => (props.hover || props.clicked) ? "#EEEDEB" : "transparent"};
	box-sizing: border-box;
`;

const LoginButton = styled.button`
	justify-content: center;
	align-items: center;
	text-align: center;
	border-radius: 5px;
	background-color: black;
	border-color: transparent;
	height: 35px;
	transition: all 0.3s ease;
	padding: 0.5rem;
	&:disabled {
		background-color: #C7C8CC;
		cursor:not-allowed;
	}

	p {
		margin-bottom: 0;
		color: white;
		font-size: 0.8rem;
	}
`;

const SignUpButton = styled.button`
	height: 35px;
	border-radius: 5px;
	padding: 0.5rem;
	border: 1px solid #E3E1D9;
	background-color: transparent;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	text-align: center;
	p {
		font-size: 0.8rem;
		margin-bottom: 0;
		padding: 0%.5rem;
	}
	
	&:nth-of-type(3) { 
		margin-top: 0.5rem;
	}

`;

const NaverLogo = styled.img`
	width: 15px;
	height: 15px;
	margin-bottom: 1px;
`;

const RecoveryButton = styled.div`
	font-size: 0.6rem;
	cursor: pointer;
	text-align: center;
	color: #C7C8CC;
	margin-top: 0.5rem;
`;

const Login = () => {

	// 아이디 비밀번호 hover에 관련된 코드
	const [IDHover, setIDHover] = useState(false);
	const [IDClick, setIDClick] = useState(false);
	const [PWHover, setPWHover] = useState(false);
	const [PWClick, setPWClick] = useState(false);
	

	
	const IDentered = () => {
		setIDHover(true);
	}

	const IDleaved = () => {
		setIDHover(false);
	}	

	const PWentered = () => {
		setPWHover(true);
	}

	const PWleaved = () => {
		setPWHover(false);
	}	

	const IDClicked = (e) => {
		e.stopPropagation();
		setIDClick(true);
		setPWClick(false);
	}

	const PWClicked = (e) => {
		e.stopPropagation();
		setPWClick(true);
		setIDClick(false);
	}

	const Clicked = () => {
		setIDClick(false);
		setPWClick(false);
		
	}


	// 이메일 유효성 검사 관련 코드
	const [inputEmail, setInputEmail] = useState('');
	const [inputPW, setInputPW] = useState('');
	const [validate, setValidate] = useState(true);
	

	const onChangeEmail = (event) => {
		const isThisEmail = (email) => {
			const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
			
				return regex.test(email);
			
		}
		setInputEmail(event.target.value);

		if (event.target.value == '') {
			setValidate(true); 
		} else if (isThisEmail(event.target.value)) {
			setValidate(true);
		} else {
			setValidate(false);
		}
	}
	


	// 로그인 버튼 관련 코드

	const [buttonDisabled, setButtonDisabled] = useState(true);
	useEffect(() => {
    if (inputEmail !== "" && validate && inputPW !== "") {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [inputEmail, validate, inputPW]);

	return(
		<>
			<Background onClick={Clicked}>
				<LoginBox onClick={Clicked}>
					<LoginCol onClick={Clicked}>
					<h5>로그인</h5>
					<hr/>
					<LabelDiv> 
						<Label htmlFor="id">아이디</Label>
						<Relative hover={IDHover} onMouseEnter={IDentered} onMouseLeave={IDleaved} clicked={IDClick} onClick={IDClicked} validate={validate}>
							<BsEnvelope/>
							<Input id="id" type="email" value={inputEmail} onChange={onChangeEmail}></Input>
						</Relative>
						
					</LabelDiv>

					<LabelDiv>
						<Label htmlFor="pw">비밀번호</Label>
						<Relative hover={PWHover} onMouseEnter={PWentered} onMouseLeave={PWleaved} clicked={PWClick} onClick={PWClicked} validate={true}>
							<BsLock/>
							<Input id="pw" type="password" value={inputPW} onChange={(event)=>setInputPW(event.target.value)}></Input>
						</Relative>
					</LabelDiv>
						
					<LoginButton disabled={buttonDisabled}>
						<p>로그인</p>
					</LoginButton>
					<RecoveryButton>
						도움이 필요하신가요?
					</RecoveryButton>
					<hr/>
					<SignUpButton>
						<BsEnvelope/>
						<p>이메일로 가입하기</p>
					</SignUpButton>

					<SignUpButton>
					 <NaverLogo src={btnD} /> <p>네이버로 가입/로그인하기</p>
					</SignUpButton>
					</LoginCol>				
				</LoginBox>
			</Background>
		</>
	)
}

export default Login;