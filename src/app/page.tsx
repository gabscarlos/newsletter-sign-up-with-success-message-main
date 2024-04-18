"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  function validarEmail(email: string): boolean {
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regexEmail.test(email);
  }

  const [email, setEmail] = useState<string>("");
  const [isEmailValido, setIsEmailValido] = useState<boolean>(true);
  const router = useRouter()

  function handleChangeEmail(event: React.ChangeEvent<HTMLInputElement>) {
    const emailInput = event.target.value;
    setEmail(emailInput);
    setIsEmailValido(validarEmail(emailInput));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (isEmailValido) {
      router.push('/success')
    } 
  }

  return (
    <form onSubmit={handleSubmit} className="flex bg-white rounded-3xl gap-7 p-7 justify-between w-[780px] h-[580px] mt-40 mx-auto">
      <div className="flex flex-col gap-4 justify-center w-5/6 ml-6">
        <h1 className="text-5xl font-bold">Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <div>
          <div className="flex gap-4 mb-3">
            <Image src="icon-list.svg" alt="1" width={20} height={20} />
            <span>Product discovery and building what matters</span>
          </div>
          <div className="flex gap-4 mb-3">
            <Image src="icon-list.svg" alt="1" width={20} height={20} />
            <span>Measuring to ensure updates are a successs</span>
          </div>
          <div className="flex gap-4 mb-3">
            <Image src="icon-list.svg" alt="1" width={20} height={20} />
            <span>And much more!</span>
          </div>
        </div>
        <div>
          <div className="flex justify-between text-sm">
            <label className="font-bold" htmlFor="email">
              Email address
            </label>
            {!isEmailValido && (
              <p className="text-red-500 text-right">Valid email required</p>
            )}
          </div>
          <input
            className={`
              border p-4 rounded-lg w-full mb-3 
              ${isEmailValido ? "border-gray-300" : "border-red-500"}
              ${isEmailValido ? "text-black" : "text-red-500"}
              ${isEmailValido ? "bg-white" : "bg-red-100"}
            `}
            type="email"
            id="email"
            value={email}
            onChange={handleChangeEmail}
            placeholder="email@company.com"
          />
        </div>
        <button className="text-white text-center rounded-lg bg-blue-950 p-3">
          Subscribe to monthly newsletter
        </button>
      </div>
      <div className="flex w-3/4">
        <Image
          src="illustration-sign-up-desktop.svg"
          alt="2"
          width={350}
          height={400}
        />
      </div>
    </form>
  );
}
