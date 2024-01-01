import React from "react";
import CardWrapper from "./CardWrapper";

const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonHref="/auth/register"
      backButtonLabel="Dont't have an account?"
      showSocial
    >
      Login Form
    </CardWrapper>
  );
};

export default LoginForm;
