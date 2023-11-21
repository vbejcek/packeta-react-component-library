import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  childred?: React.ReactNode;
}

function Button({ className, ...others }: ButtonProps) {
  return <button className={"a"} {...others} />;
}

export default Button;
