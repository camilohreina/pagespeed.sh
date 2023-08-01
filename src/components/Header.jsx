import Link from "next/link";
import { URL_WEB } from "./../../src/app/config";
import { ToggleMode } from "./ToggleMode";

export function Header() {
  return (
    <div className="my-8 flex justify-between items-center">
      <img
        width={25}
        className="dark:invert"
        src="/icons/icon-github.svg"
        alt="Github"
      />
      <Link href={URL_WEB}>
        <p className=" font-bold text-2xl  dark:text-white">PageSpeed.sh</p>
      </Link>
      <ToggleMode />
    </div>
  );
}
