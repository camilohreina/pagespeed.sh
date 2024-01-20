import Link from 'next/link';
import { URL_WEB } from './../../src/app/config';
import { ToggleMode } from './ToggleMode';

export function Header() {
  return (
    <div className="my-8 flex justify-between items-center">
      <div className="flex flex-row gap-4 cursor-pointer">
        <a href="https://www.buymeacoffee.com/camilohreina" target="_blank">
          <img
            width={22}
            className="dark:invert"
            src="/icons/coffee.svg"
            alt="Buy me a coffee"
          />
        </a>
        <a href="https://github.com/camilohreina/pagespeed.sh" target="_blank">
          <img
            width={25}
            className="dark:invert"
            src="/icons/icon-github.svg"
            alt="Github"
          />
        </a>
      </div>

      <Link href={URL_WEB}>
        <p className=" font-bold text-2xl  dark:text-white">PageSpeed.sh</p>
      </Link>
      <ToggleMode />
    </div>
  );
}
