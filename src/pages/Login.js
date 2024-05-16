import  { React, useState, useEffect, useRef } from "react";
import { styled } from "styled-components";
import { BsEnvelope, BsLock } from "react-icons/bs";

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
	margin-bottom: 1.5rem;
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
	height: 40px;
	transition: background-color 0.5s ease;
	border: ${props => props.clicked && !props.validate ? '2px solid red' : props.clicked && props.validate ? '2px solid black' : props.clicked ? '2px solid black' : '1px solid #B4B4B8'};
	background-color: ${props => (props.hover || props.clicked) ? "#EEEDEB" : "transparent"};
	box-sizing: border-box;
`;

const LoginButton = styled.button`
	justify-content: center;
	align-items: center;
	text-align: center;
	border-radius: 5px;
	background-color: 'eeedeb';
	border-color: transparent;
	height: 40px;
	
	h6 {
		margin-bottom: 0;
		color: white;
	}
`;



const Login = () => {

	const [IDHover, setIDHover] = useState(false);
	const [IDClick, setIDClick] = useState(false);
	const [PWHover, setPWHover] = useState(false);
	const [PWClick, setPWClick] = useState(false);
	const originRef = useRef(null);

	
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
						<Relative hover={PWHover} onMouseEnter={PWentered} onMouseLeave={PWleaved} clicked={PWClick} onClick={PWClicked}>
							<BsLock/>
							<Input id="pw" type="password" value={inputPW} onChange={(event)=>setInputPW(event.target.value)}></Input>
						</Relative>
					</LabelDiv>

					<LoginButton>
						<h6>로그인</h6>
					</LoginButton>	
				
					</LoginCol>				
				</LoginBox>
			</Background>
		</>
	)
}

export default Login;