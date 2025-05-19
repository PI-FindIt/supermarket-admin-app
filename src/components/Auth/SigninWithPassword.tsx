"use client";

import { Mail, KeyRound, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import InputGroup from "../FormElements/InputGroup";
import { Select } from "../FormElements/select";
import Image from "next/image";
import FindItAdmin from "@/assets/logos/FindItAdmin.png";

export default function SigninWithPassword() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedStore, setSelectedStore] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleStoreSelect = (value: string) => {
    setSelectedStore(value);
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      return;
    }

    setLoading(true);
    setError("");

    try {
      if (formData.email === "osvaldo@gmail.com" && formData.password === "admin") {
        localStorage.setItem("selectedStore", selectedStore);
        router.push("/dashboard");
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
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

          <Image
            src={FindItAdmin}
            alt="FindItAdmin"
            width={289}
            height={61}
            className="mb-6"
          />

          <h2 className="text-xl font-bold text-dark pt-12">
            Log-in
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
            onChange={handleStoreSelect}
          />

          <InputGroup
            type="email"
            label=""
            className="mb-4 [&_input]:py-[15px]"
            placeholder="Username"
            name="email"
            handleChange={handleChange}
            value={formData.email}
            icon={<Mail />}
          />

          <InputGroup
            type="password"
            label=""
            className="mb-5 [&_input]:py-[15px]"
            placeholder="Password"
            name="password"
            handleChange={handleChange}
            value={formData.password}
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
              disabled={loading}
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-orange-400 to-pink-500 p-4 font-bold text-white transition hover:opacity-90 disabled:opacity-50"
            >
              {loading ? (
                <>
                  Logging in...
                  <Loader2 className="h-4 w-4 animate-spin" />
                </>
              ) : (
                "Log-in"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}