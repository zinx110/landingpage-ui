"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Button from "../elements/Button";

const NavProfile = () => {
  const [user, setUser] = useState("");
  return <>{user ? <Profile /> : <Login />}</>;
};

export default NavProfile;

const Login = () => {
  const router = useRouter();
  return (
    <div className="flex gap-4">
      <Button
        color="secondary"
        onClick={() => {
          router.push("/auth/login");
        }}
      >
        Log In
      </Button>
      <Button
        onClick={() => {
          router.push("/auth/register");
        }}
      >
        Register
      </Button>
    </div>
  );
};

const Profile = () => {
  return <div className="flex gap-4">a</div>;
};
