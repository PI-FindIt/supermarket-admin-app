"use client";

import { Mail, KeyRound } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import InputGroup from "../FormElements/InputGroup";
import { Select }  from "../FormElements/select";
import Image from "next/image";

export default function SigninWithPassword() {
  const router = useRouter();
  const [error, setError] = useState("");

  const [data, setData] = useState({
    email: process.env.NEXT_PUBLIC_DEMO_USER_MAIL ?? "",
    password: process.env.NEXT_PUBLIC_DEMO_USER_PASS ?? "",
    remember: false,
  });

  const [loading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    // Dummy validation
    if (email === "admin@gmail.com" && password === "admin") {
      router.push("/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center px-4">
      <div className="w-full max-w-[440px] rounded-2xl bg-white p-12 shadow-1 space-y-8">
        <div className="flex flex-col items-center mb-8">
          <Image
            src={"/images/logo/logo.svg"}
            alt="Logo"
            width={176}
            height={32}
            className="mb-6"
          />

          <h2 className="text-2xl font-bold text-dark ">
            Admin Log-in
          </h2>
        </div>

        <form onSubmit={handleSubmit}>
          <Select
            label=""
            items={[
              { value: "1", label: "Mercadona" },
              { value: "2", label: "Pingo Doce" },
              { value: "3", label: "Continente" }
            ]}
            placeholder="Choose Supermarket"
            className="mb-4"
          />

          <InputGroup
            type="email"
            label=""
            className="mb-4 [&_input]:py-[15px]"
            placeholder="Username"
            name="email"
            handleChange={handleChange}
            value={data.email}
            icon={<Mail />}
          />

          <InputGroup
            type="password"
            label=""
            className="mb-5 [&_input]:py-[15px]"
            placeholder="Password"
            name="password"
            handleChange={handleChange}
            value={data.password}
            icon={<KeyRound />}
          />

          {error && (
            <div className="mb-4 text-center text-red-500">
              {error}
            </div>
          )}

          <div className="mb-4.5">
            <button
              type="submit"
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-orange-400 to-pink-500 p-4 font-bold text-white transition hover:opacity-90"
            >
              Log-in
              {loading && (
                <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-white border-t-transparent" />
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
