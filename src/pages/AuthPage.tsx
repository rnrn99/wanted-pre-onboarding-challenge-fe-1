import React from "react";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";

function AuthPage() {
  return (
    <div>
      <RegisterForm />
      <LoginForm />
    </div>
  );
}

export default AuthPage;
