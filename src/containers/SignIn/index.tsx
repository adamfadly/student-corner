import { FC } from "react";
import RedditIcon from "@/styles/icons/RedditIcon";
import Link from "next/link";

const SignIn: FC = () => {
  return (
    <>
      <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
        <div className="flex flex-col space-y-2 text-center">
          <div className="w-full mx-auto flex items-center justify-center">
            <RedditIcon />
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome Back
          </h1>
          <p className="text-sm max-w-xs mx-auto">
            By continuing, you are setting up a Breadit account and agree to our
            User Agreement and Privacy Policy.
          </p>

          {/* <UserAuthForm /> */}

          <p className="px-8 text-center text-sm text-muted-foreground">
            New to Reddit?{" "}
            <Link
              href="/sign-up"
              className="hover:text-brand text-sm underline underline-offset-4"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignIn;
