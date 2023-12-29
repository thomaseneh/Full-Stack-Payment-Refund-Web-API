import styled from "styled-components";

export const Form = styled.form`
  height: 100vh;
  width: 100vw;
  max-width: 600px;
  margin: auto;
  padding: 20px;
  border-radius: 8px;

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
export const PasswordArea = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 15px;
  margin-top: 15px;
`;
export const PasswordRendering = styled.div`
  position: absolute;
  right: 10px;
  font-weight: bold;
  cursor: pointer;
`;