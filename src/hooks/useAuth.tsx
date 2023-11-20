"use client";
import { useRouter } from "next/navigation";

// interface UseAuth extends PropsWithChildren {}

const useAuth = () => {
  const session = false;
  const router = useRouter();
  if (!session) {
    router.push("/");
  }
  if (session) {
    router.push("/dashboard");
  }
};

export default useAuth;
