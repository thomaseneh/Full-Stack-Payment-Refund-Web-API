import { useState } from "react";
import { Form, H1, P, FormArea } from "./PasswordResetStyle";

export function PasswordResset() {
  const [isPasswordMatched, setIsPasswordMatch] = useState(false);
  const [isPasswordConditions, setIsPasswordConditions] = useState(false);

  function eventHandler(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    if (data["newPassword"] !== data["confirmPassword"]) {
      setIsPasswordMatch(true);
      return;
    }
    const passwordPattern =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?\":{}|<>])[A-Za-z\d!@#$%^&*(),.?\":{}|<>]{8,}$/;

    if (!passwordPattern.test(data["newPassword"])) {
      setIsPasswordConditions(true);
      return;
    }

    console.log(data);
    event.target.reset();
    setIsPasswordMatch(false);
    setIsPasswordConditions(false);
  }
  return (
    <Form onSubmit={eventHandler}>
      <FormArea>
        <H1>Reset Password</H1>
        <P>Enter your new password</P>
        <div>
          <label htmlFor="password" className="form-control">
            New password
          </label>
          <input type="password" name="newPassword" minLength={8} required />
          <div>
            {isPasswordConditions && (
              <p style={{ color: "red" }}>
                Password must contain alphabet, upper and local letter and
                special character
              </p>
            )}
          </div>
        </div>
        <div>
          <label htmlFor="confirmPassword" className="form-control">
            Confirm new password
          </label>
          <input type="password" name="confirmPassword" />
        </div>
        <div>
          {isPasswordMatched && (
            <p style={{ color: "red" }}>
              Password does not match. Enter a valid password
            </p>
          )}
        </div>
        ;<button type="submit">Reset password</button>
      </FormArea>
    </Form>
  );
}

export default PasswordResset;
