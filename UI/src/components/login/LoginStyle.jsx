import styled from "styled-components";

export const LoginPage = styled.div`
  min-width: 100%;
  height: 100vh;
  width: 100vw;
  //   display: flex;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
`;
export const LoginForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: white;
  height: 100vh; /* Adjust the height as needed */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 500px) {
    max-width: 100%;
  }
`;
export const Logo = styled.div`
  font-size: 52px;
  color: white;
  background-color: blue;
  border-radius: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  z-index: 1;
  position: absolute;
  top: 2%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const LoginContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Icon = styled.div`
  font-size: 20px;
  margin-right: 5px;
  color: gray;
`;
export const FormControl = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const LoginArea = styled.div`
  display: flex;
  width: 300px;
  border-radius: 15px;
  border: 1px solid black;
  position: relative;
  z-index: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  h3 {
    font-size: 24px;
    margin-bottom: 20px;
    margin-top: 10px;
  }

  div {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    margin-top: 15px;
  }

  button {
    margin-top: 20px;
  }

  div:last-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
  }
`;

export const Option = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  div {
    display: flex;
    align-items: center;
    margin-bottom: 15px;

    input {
      margin-right: 8px;
    }

    label {
      font-size: 14px;
    }
  }

  a {
    font-size: 14px;
    text-decoration: none;
    color: blue;

    &:hover {
      text-decoration: underline;
    }
  }
`;
export const InputOption = styled.div`
  //   display: flex;
  //   align-items: center;

  input {
    margin-right: 18px;
  }
  label {
    font-size: 14px;
    color: #333;
  }
`;

export const NoAccount = styled.div`
  display: flex;
  padding: 20px;
`;
export const SocialLogin = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin-left: 40px;
`;
export const SocialIcon = styled.div`
  text-align: center;

  p {
    margin: 0;
  }
  svg {
    font-size: 24px;
  }
`;
export const Or = styled.p`
  text-align: center;
  padding-bottom: 5px;
`;
