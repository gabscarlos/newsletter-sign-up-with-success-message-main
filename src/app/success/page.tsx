"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Success() {
    const router = useRouter()

    function dismissMessage() {
        router.push('/')
    }

    return (
        <div className="flex flex-col justify-evenly bg-white rounded-3xl w-[480px] h-[520px] m-auto mt-40 p-10 gap-7">
            <Image src="icon-success.svg" alt="Success" width={70} height={70} />
            <h1 className="text-6xl font-bold">Thanks for subscribing!</h1>
            <p>A confirmation email has been sent to <b>gabriel@loremcompany.com</b>. Please open it and click the button inside to confirm your subscription.</p>
            <button onClick={dismissMessage} className="text-white text-center rounded-lg bg-blue-950 p-4">Dismiss message</button>
        </div>
    )
}