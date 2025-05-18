import type { Metadata } from "next";
import SigninWithPassword from "@/components/Auth/SigninWithPassword";

export const metadata: Metadata = {
  title: "Sign in",
};

export default function SignIn() {
  return  <SigninWithPassword />;
}
