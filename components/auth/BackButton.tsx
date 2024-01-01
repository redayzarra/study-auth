import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface Props {
  label: string;
  href: string;
}

const BackButton = ({ label, href }: Props) => {
  return (
    <Button variant="link" className="font-normal mx-auto " size="sm" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
};

export default BackButton;
