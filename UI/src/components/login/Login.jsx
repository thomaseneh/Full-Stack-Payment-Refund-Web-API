// import React from "react";
import { FaUser, FaFacebook, FaApple } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiTwotoneUnlock } from "react-icons/ai";
import { PiUserFill } from "react-icons/pi";
import NavLink from "react-bootstrap/esm/NavLink";

import {
  LoginForm,
  Logo,
  Icon,
  FormControl,
  Option,
  SocialLogin,
  SocialIcon,
  Or,
  LoginArea,
  LoginPage,
  NoAccount,
  LoginContainer,
} from "./LoginStyle";

export function Login() {
  function eventHandler(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    const acquisitionChannel = formData.getAll("acquisition");
    data.acquisition = acquisitionChannel;

    console.log(data);
    event.target.reset();
  }
  return (
    <LoginPage>
      <LoginForm onSubmit={eventHandler}>
        <LoginContainer>
          <Logo>
            <PiUserFill />
          </Logo>
          <LoginArea>
            <h3>Sign In</h3>
            <div>
              <Icon>
                <FaUser />
              </Icon>
              <FormControl
                type="email"
                placeholder="Username"
                name="username"
                required
                autoComplete="username"
              />
            </div>
            <div>
              <Icon>
                <AiTwotoneUnlock />
              </Icon>
              <FormControl
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                autoComplete="current-password"
                required
                minLength={6}
              />
            </div>
            <button type="submit">Login</button>

            <Option>
              <div>
                <input type="checkbox" id="rememberMe" />
                <label htmlFor="RememberMe">Remember me</label>
              </div>
              <NavLink href="/passwordreset">Forget Password</NavLink>
            </Option>
          </LoginArea>
        </LoginContainer>
        <NoAccount>
          <p>Don't have an account?</p>
          <NavLink
            href="/signup"
            style={{ fontWeight: "bold", marginLeft: "5px" }}
          >
            Sign up
          </NavLink>
        </NoAccount>

        <Or>or Login with</Or>

        <SocialLogin>
          <SocialIcon>
            <NavLink
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div style={{ display: "flex" }}>
                <FaFacebook style={{ color: "blue" }} />
                <p>Facebook</p>
              </div>
            </NavLink>
          </SocialIcon>
          <SocialIcon>
            <NavLink
              href="https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue%26pli%3D1&ec=GAlAwAE&hl=en&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S1040229%3A1702764530984140&theme=glif"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div style={{ display: "flex" }}>
                <AiFillGoogleCircle style={{ color: "red" }} />
                <p>Google</p>
              </div>
            </NavLink>
          </SocialIcon>
          <SocialIcon>
            <NavLink
              href="https://appleid.apple.com/sign-in"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div style={{ display: "flex" }}>
                <FaApple />
                <p>Apple</p>
              </div>
            </NavLink>
          </SocialIcon>
        </SocialLogin>
      </LoginForm>
    </LoginPage>
  );
}

export default Login;
