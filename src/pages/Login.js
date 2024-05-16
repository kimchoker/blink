import  { React, useState, useEffect, useRef } from "react";
import { styled } from "styled-components";
import { BsEnvelope, BsLock } from "react-icons/bs";

const Background = styled.div`
	display: flex;
	justify-content: center; /* 수평 중앙 정렬 */
	align-items: center; /* 수직 중앙 정렬 */
	height: 100vh;
	background-color: #EEEDEB;
`;

const LoginBox = styled.div`
	display: flex;
	justify-content: center; /* 수평 중앙 정렬 */
	align-items: center; /* 수직 중앙 정렬 */

	height: 60%;
	width: 40%;
	min-width: 300px;
	background-color: white;
`

const LoginCol = styled.div`
	width: 80%;
	display: flex;
	flex-direction: column;
`;

const LabelDiv = styled.div`
	margin-bottom: 1.5rem;
	display: flex;
	flex-direction: column;
`;

const Label = styled.label`
	margin-bottom: 0.5rem; 
	font-weight: bold;
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
	transition: background-color 0.5s ease;
	border: ${props => props.clicked ? '2px solid black' : '1px solid #B4B4B8'};
	background-color: ${props => (props.hover || props.clicked) ? "#EEEDEB" : "transparent"};
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


	return(
		<>
			<Background onClick={Clicked}>
				<LoginBox onClick={Clicked}>
					<LoginCol onClick={Clicked}>
					<h4>로그인</h4>
					<hr/>
					<LabelDiv> 
						<Label htmlFor="id">아이디</Label>
						<Relative hover={IDHover} onMouseEnter={IDentered} onMouseLeave={IDleaved} clicked={IDClick} onClick={IDClicked}>
							<BsEnvelope/>
							<Input id="id" type="text"></Input>
						</Relative>
						
					</LabelDiv>

					<LabelDiv>
						<Label htmlFor="pw">비밀번호</Label>
						<Relative hover={PWHover} onMouseEnter={PWentered} onMouseLeave={PWleaved} clicked={PWClick} onClick={PWClicked}>
							<BsLock/>
							<Input id="pw" type="password"></Input>
						</Relative>
					</LabelDiv>
							
				
					</LoginCol>				
				</LoginBox>
			</Background>
		</>
	)
}

export default Login;