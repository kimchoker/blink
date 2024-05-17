import { React, useState } from "react";
import styled from "styled-components";
import { validateEmail } from "../utils/utils"
import { BsEnvelope,  BsEnvelopeArrowUp } from "react-icons/bs";
import { useEffect } from "react";


const Background = styled.div`
	display: flex;
	justify-content: center; /* 수평 중앙 정렬 */
	align-items: center; /* 수직 중앙 정렬 */
	height: 100vh;
	background-color: #EEEDEB;
	font-family: 'NanumBarunGothic';
`;

const SignUpBox = styled.div`
	display: flex;
	justify-content: center; /* 수평 중앙 정렬 */
	align-items: center; /* 수직 중앙 정렬 */

	height: 60%;
	width: 40%;
	min-width: 300px;
	min-height: 500px;
	max-width: 600px;
	background-color: white;
`;

const SignUpCol = styled.div`
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
	p {
		color: red;
		font-size: 0.7rem;
	}
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

const SignUpButton = styled.button`
	display: flex;
	flex-direction: row;
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
		padding: 0.5rem;
	}
`;

const WhiteEnvelopeArrowUp = styled(BsEnvelopeArrowUp)`
  color: white;
	
`;



const SignUp = () => {

	// 이메일 검증
	const [inputEmail, setInputEmail] = useState('');
	const [validate, setValidate] = useState(true);
	

	const onChangeEmail = (event) => {
		validateEmail(event.target.value, setInputEmail, setValidate);
	}
	// hover

	const [IDHover, setIDHover] = useState(false);
	const [IDClick, setIDClick] = useState(false);

	const IDentered = () => {
		setIDHover(true);
	}

	const IDleaved = () => {
		setIDHover(false);
	}	

	const IDClicked = (e) => {
		e.stopPropagation();
		setIDClick(true);
	}

	const Clicked = () => {
		setIDClick(false);
	}

	// button disabled
	const [buttonDisabled, setButtonDisabled] = useState(true);
	const [info, setInfo] = useState("");
	const [visible, setVisible] = useState()
	useEffect(() => {
		if(inputEmail == "") {
			setInfo("");
		} else if (inputEmail !== "" && validate) {
      setButtonDisabled(false);
			setInfo("");
    } else {
      setButtonDisabled(true);
			setInfo("올바른 이메일을 입력해주세요")
    }
  }, [inputEmail, validate]);


	return(
		<Background onClick={Clicked}>
			<SignUpBox onClick={Clicked}>
				<SignUpCol onClick={Clicked}>
					<h5>회원가입</h5>
					<hr/>
					<LabelDiv>
						<Label htmlFor="email">이메일</Label>
						<Relative hover={IDHover} onMouseEnter={IDentered} onMouseLeave={IDleaved} clicked={IDClick} onClick={IDClicked} validate={validate}>
							<BsEnvelope/>
							<Input id="id" type="email" value={inputEmail} onChange={onChangeEmail}></Input>		
						</Relative>
						<p>{info}</p>
					</LabelDiv>
					<SignUpButton disabled={buttonDisabled}>
						<p>이메일 인증</p> <WhiteEnvelopeArrowUp/>
					</SignUpButton>
				</SignUpCol>
			</SignUpBox>
		</Background>
	)
}

export default SignUp;