import React from "react";
import useAuth from "@/hooks/useAuth";

const page = () => {
  const session = useAuth();
  return <div>this is Dashboard page</div>;
};

export default page;
