import styled from "styled-components";

export const SignUpForm = styled.form`
  max-width: 700px;
  margin: 0 auto;
  height: 100vh;
  width: 100vw;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: rgb(241, 241, 232);
`;

export const SignUpArea = styled.div`
  max-width: 450px;

  margin: 0 auto;
  margin-top: 10%;

  h2 {
    font-size: 28px;
    margin-bottom: 15px;
    font-weight: bold;
  }
  p {
    margin-bottom: 16px;
  }

  div {
    margin-bottom: 15px;
  }

  label span {
    font-size: 14px;
  }
`;
export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;
