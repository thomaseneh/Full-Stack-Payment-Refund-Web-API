import { SignUpForm, SignUpArea, Input, PasswordArea, PasswordRendering } from "./SignUpStyle";
import { useState } from "react";
import Error from "../../Error";
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";

 export function SignUp() {
  const [isPasswordMatched, setIsPasswordMatch] = useState(false);
  const [isPasswordConditions, setIsPasswordConditions] = useState(false);
  const [badRequest, setBadRequest] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  async function eventHandler(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    const acquisitionChannel = formData.getAll("acquisition");
    data.acquisition = acquisitionChannel;

    if (data["password"] !== data["confirmPassword"]) {
      setIsPasswordMatch(true);
      return;
    }
    const passwordPattern =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;

    if (!passwordPattern.test(data["password"])) {
      setIsPasswordConditions(true);
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/newuser", {
        method: 'POST',
        body: JSON.stringify(data),
  
        headers: {
          'Content-Type': 'application/json'
        },
      });
  
        if(!response.ok){
          return new Error("Failed to load the requested page. Error occured during http request!")
        }
      
    } catch (error) {
      setBadRequest(error)
      return;
      
    }
    event.target.reset();
    setIsPasswordMatch(false);
    setIsPasswordConditions(false);
    setBadRequest(null);
   }

   const PasswordVisibility = () =>{
    setShowPassword((prev) => !prev)
  }
  const ConfirmPasswordVisibility = () =>{
    setShowConfirmPassword((prev) => !prev)
  }

  return (
    <SignUpForm onSubmit={eventHandler}>
      <SignUpArea>
        <h2>Sign Up</h2>
        <p>Please, fill this form to create an account</p>
        <div style={{ display: "flex" }}>
          <Input
            type="firstName"
            placeholder="First Name"
            name="firstName"
            required
          />
          <Input
            style={{ marginLeft: "15px" }}
            type="lastName"
            placeholder="Last Name"
            name="lastName"
            required
          />
        </div>
        <div>
          <Input type="email" placeholder="Email" name="email" required />
        </div>
        <PasswordArea>
          <Input type={showPassword ? 'text' : 'password'} placeholder="Password" name="password" />
          <PasswordRendering onClick={PasswordVisibility}>
          {showPassword ? (
            <FaEye />
          ) : (
            <IoMdEyeOff />
          )}
          </PasswordRendering>
        </PasswordArea>
        <div>
          {isPasswordConditions && (
            <p style={{ color: "red" }}>
              Password must contain alphabet, upper and local letter and special
              character
            </p>
          )}
        </div>
        <PasswordArea>
          <Input
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="Confirm Password" name="confirmPassword"/>
            <PasswordRendering  onClick={ConfirmPasswordVisibility}>
            {showConfirmPassword ? <FaEye/> : <IoMdEyeOff />}
            </PasswordRendering>
        </PasswordArea>
        <div>
          {isPasswordMatched && (
            <p style={{ color: "red" }}>
              Password does not match. Enter a valid password
            </p>
          )}
        </div>
        <div>
          <label style={{ padding: "5px" }}>
            <input type="checkbox" name="checkbox" value="yes"/>
            <span style={{ paddingLeft: "5px" }}>
              I accept the
              <a href="/underConstruction" style={{ paddingLeft: "5px" }}>
                Terms of Use & Privacy Policy.
              </a>
            </span>
          </label>
        </div>
        <button type="submit">Sing Up</button>
      </SignUpArea>
      {badRequest && <Error title = "The request url does not exist" message={badRequest.message} />}
    </SignUpForm>
  );
}


export default SignUp;
