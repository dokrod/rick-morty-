import TextField from "@mui/material/TextField";

import Image from "next/image";
import Link from "next/link";

const links = ["characters", "episode", "location"];

function Navigation() {
  return (
    <nav className="flex h-20 bg-[#39BBF2] p-4 shadow-xl">
      <Link
        href={"/characters"}
        className="absolute h-12 w-auto hover:scale-110 transition-all duration-300"
      >
        <Image
          src="/img/logo.svg"
          alt="Rick & Morty logo"
          width={130}
          height={48}
          priority
        />
      </Link>
      <div className="m-auto">
        <ul className="flex gap-14 justify-center items-center">
          {links.map((link) => (
            <li
              key={link}
              className="hover:scale-110 transition-transform duration-300"
            >
              <Link href={`/${link}`} className="font-schwifty text-3xl text-white font-bold">
                {link.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
