import styled from "styled-components";
import homeBackground from '../../assets/homeBackground.jpg';

export const WrapperDiv = styled.div`
  color: white;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 0;
  padding: 0;
  background-image: url(${homeBackground});
  // background-image: url("../assets/homeBackground.jpg");
  background-size: cover;
  height: 100vh;
  background-position: center;
  width: 100vw;
  margin: 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Paragraph = styled.p`
  font-size: 1.2em;
  margin-bottom: 40px;
`;

export const H1 = styled.h1`
  font-size: 4em;
  margin-bottom: 20px;
`;


