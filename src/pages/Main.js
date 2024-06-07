import  { React, useState, useEffect } from "react";
import { styled } from "styled-components";
import SimpleSwiper from "../utils/Swiper";

const MainPage = styled.div`
	display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: 'NanumBarunGothic';
`;


const Main = () => {
	return (
		<MainPage>
			<SimpleSwiper/>
		</MainPage>
		
	)
}


export default Main;