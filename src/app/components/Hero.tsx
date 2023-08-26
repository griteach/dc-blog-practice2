import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="w-full">
      <div className="flex justify-center">
        <Image
          src={"/images/griteach_logo_circle.png"}
          alt={"logo"}
          width={200}
          height={200}
        />
      </div>
      <div className=" flex flex-col items-center my-4">
        <h1 className="font-bold text-3xl">{`Hi, I'm griteach`}</h1>
        <h2 className="text-lg font-semibold">{`Full-stack Engineer`}</h2>
        <p className="text-md">{`연습벌레, 개발하는 교사`}</p>
        <Link
          href="/about"
          className="rounded-lg font-bold text-sm bg-orange-400 px-4 py-1 my-2"
        >{`Contact Me`}</Link>
      </div>
    </div>
  );
}
