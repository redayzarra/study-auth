"use client";

interface Props {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

const LoginButton = ({ children, mode = "redirect", asChild }: Props) => {
  const onClick = () => {
    console.log("LOGIN BUTTON CLICKED");
  };
  return (
    <div onClick={onClick} className="cursor-pointer">
      {children}
    </div>
  );
};

export default LoginButton;
