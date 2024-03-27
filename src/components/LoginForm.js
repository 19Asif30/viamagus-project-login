import React from "react";
import AmazonLogo from "../assets/images/AmazonLogo.png";
import LoginImage from "../assets/images/LoginImage.png";

import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FacebookSignInButton, GoogleSignInButton } from "./Buttons";

const LoginForm = () => {
  const initValidation = {};
  initValidation["email"] = yup
    .string()
    .required("Email is required")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Invalid email address"
    );
  initValidation["password"] = yup
    .string()
    .required("Password is required")
    .test(
      "length",
      "Length of password must be 8 characters",
      (value) => value.length >= 8
    );
  const SignupSchema = yup.object().shape(initValidation);

  const {
    control,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });

  const onSubmit = async (data) => {
    alert(`${data.email} is Signed In`);
  };

  return (
    <div className="login-form-wrap">
      <div className="login-form-parent">
        <div className="login-form-header">
          <img src={AmazonLogo} alt="Amazon Logo" />
        </div>
        <div className="form-wrapper">
          <form onSubmit={handleSubmit(onSubmit)}>
            <p className="login-title">Login</p>
            <div className="login-inputs">
              <img src={LoginImage} alt="LoginImg" className="tree-img" />
              <div className="inputbox">
                <label htmlFor="email">Email</label>
                <Controller
                  id={"email"}
                  name={"email"}
                  control={control}
                  defaultValue={""}
                  render={({ field }) => (
                    <input
                      {...field}
                      className={`form-control ${
                        errors["email"] ? "is-invalid" : ""
                      }`}
                      // placeholder={"Email"}
                    />
                  )}
                />
                {errors["email"] && (
                  <div className="invalid-feedback">
                    {errors["email"].message}
                  </div>
                )}
              </div>

              <div className="inputbox">
                <label htmlFor="email">Password</label>
                <Controller
                  id={"password"}
                  name={"password"}
                  control={control}
                  defaultValue={""}
                  render={({ field }) => (
                    <input
                      {...field}
                      className={`form-control ${
                        errors["password"] ? "is-invalid" : ""
                      }`}
                      // placeholder={"Email"}
                    />
                  )}
                />
                {errors["password"] && (
                  <div className="invalid-feedback">
                    {errors["password"].message}
                  </div>
                )}
              </div>

              <div className="inputbox">
                <button type="submit" className="sign-btn">
                  Sign In
                </button>
              </div>
              <div className="inputbox forgot-signup">
                <p className="forgot-password">Forgot Password?</p>

                <p className="sign-up">New User? Sign Up?</p>
              </div>

              <p className="or">or</p>

              <div className="inputbox">
                <GoogleSignInButton />
              </div>

              <div className="inputbox">
                <FacebookSignInButton />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
