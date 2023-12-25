import styled from "styled-components";

export const Form = styled.form`
  height: 100vh;
  width: 100vw;
  max-width: 600px;
  margin: auto;
  padding: 20px;
  border-radius: 8px;
  //   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  label {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
  }

  input {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
  }
`;

export const H1 = styled.h1`
  text-align: center;
  font-size: 28px;
  margin-bottom: 20px;
`;
export const P = styled.p`
  text-align: center;
  margin-bottom: 20px;
`;
export const FormArea = styled.div`
  margin-top: 10%;
  max-width: 400px;
`;
