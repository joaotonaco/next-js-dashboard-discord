'use client';

import SideBarContext from '../../contexts/SideBarContext';
import SyncStation from '../../../public/syncstation.png';
import { IoMenu } from 'react-icons/io5';
import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function NavBar() {
  const { setState } = useContext(SideBarContext);

  return (
    <nav>
      <div className="flex flex-col sm:w-full transition-transform duration-500">
        <div className="flex items-center justify-start w-full h-[84px] bg-neutral-850 px-4 gap-4">
          <button
            className="group rounded-full sm:hidden"
            onFocus={() => setState(true)}
            onBlur={() => setState(false)}
          >
            <IoMenu className="text-neutral-500 rounded-full group-focus:text-neutral-200 group-hover:text-neutral-400 w-8 h-8" />
          </button>
          <Link href="/" style={{ WebkitTapHighlightColor: 'transparent' }}>
            <div className="flex gap-2 items-center text-start cursor-pointer">
              <Image
                src={SyncStation}
                alt="Sync Station"
                className="box-border w-8"
              />
              <span className="leading-none font-semibold text-neutral-300">
                Sync
                <br />
                Station
              </span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
