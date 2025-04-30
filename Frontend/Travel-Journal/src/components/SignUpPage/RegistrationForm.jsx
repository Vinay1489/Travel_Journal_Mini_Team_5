"use client";
import React, { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";
import UserIcon from "./icons/UserIcon";
import EmailIcon from "./icons/EmailIcon";
import LockIcon from "./icons/LockIcon";
import { signup } from "../../api/authService";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { toast } from "react-toastify";


function RegistrationForm() {
  const {isLoggedIn,setIsLoggedIn} =useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await signup(name, email, password, passwordConfirm);
      if (data.status === "Success") {
        // alert("Account created Successfully!");
        toast.success("✅ Signed up successfully! ");
        console.log("Sending: ", name, email, password, passwordConfirm);
        setIsLoggedIn(!isLoggedIn);
        navigate("/");
      }
    } catch (err) {
      const rawMessage = err.response?.data?.message || "Signup failed";
      if (rawMessage.includes("E11000") && rawMessage.includes("email")) {
        // alert("Email already exists. Please sign up with a different email.");
        toast.error("Email already exists. Please sign up with a different email.");
      } else {
        toast.error(rawMessage);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto my-0 w-96 max-sm:w-full">
      <div className="mb-5">
        <InputField
          label="Full Name"
          type="text"
          placeholder="John Doe"
          icon={<UserIcon />}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="mb-5">
        <InputField
          label="Email"
          type="email"
          placeholder="you@example.com"
          icon={<EmailIcon />}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-5">
        <InputField
          label="Password"
          type="password"
          placeholder="••••••••"
          icon={<LockIcon />}
          helperText="Must be at least 8 characters"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="mb-5">
        <InputField
          label="ConfirmPassword"
          type="password"
          placeholder="••••••••"
          icon={<LockIcon />}
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
      </div>

      <Button type="submit" fullWidth>
        Create account
      </Button>

      <div className="mt-6 text-sm text-center text-slate-600">
        <span>Already have an account? </span>
        {/* <a href="" className="text-blue-600 no-underline">
          Sign in
        </a> */}
        <Link to="/login" className="text-blue-600 no-underline">
          Sign in
        </Link>
      </div>
    </form>
  );
}

export default RegistrationForm;
