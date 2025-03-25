"use client";
import React from "react";
import InputField from "./InputField";
import Button from "./Button";
import UserIcon from "./icons/UserIcon";
import EmailIcon from "./icons/EmailIcon";
import LockIcon from "./icons/LockIcon";

function RegistrationForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto my-0 w-96 max-sm:w-full">
      <div className="mb-5">
        <InputField
          label="Full Name"
          type="text"
          placeholder="John Doe"
          icon={<UserIcon />}
        />
      </div>

      <div className="mb-5">
        <InputField
          label="Email"
          type="email"
          placeholder="you@example.com"
          icon={<EmailIcon />}
        />
      </div>

      <div className="mb-5">
        <InputField
          label="Password"
          type="password"
          placeholder="••••••••"
          icon={<LockIcon />}
          helperText="Must be at least 8 characters"
        />
      </div>

      <div className="mb-5">
        <InputField
          label="ConfirmPassword"
          type="password"
          placeholder="••••••••"
          icon={<LockIcon />}
        />
      </div>

      <Button type="submit" fullWidth>
        Create account
      </Button>

      <div className="mt-6 text-sm text-center text-slate-600">
        <span>Already have an account? </span>
        <a href="#" className="text-blue-600 no-underline">
          Sign in
        </a>
      </div>
    </form>
  );
}

export default RegistrationForm;
