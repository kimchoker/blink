import  { React, useState, useEffect } from "react";
import { styled } from "styled-components";
import SimpleSwiper from "../utils/Swiper";

const MainPage = styled.div`
	display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: 'NanumBarunGothic';
	flex-direction: column;
`;

const Comment = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 20%;
	width: 100%;
`;

const Main = () => {
	return (
		<MainPage>
			<Comment>
				
			</Comment>
			<SimpleSwiper/>
		</MainPage>
		
	)
}


export default Main;