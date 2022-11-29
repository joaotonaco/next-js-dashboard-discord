'use client';

import SideBarContext from '../../contexts/SideBarContext';
import { mockGuilds } from '../../mocks/guilds';
import { AiOutlineLine } from 'react-icons/ai';
import { HiServer } from 'react-icons/hi';
import GuildItem from './GuildItem';
import { useContext } from 'react';
import MainItem from './MenuItem';

function SideBar() {
  const { state } = useContext(SideBarContext);

  return (
    <>
      <div
        className={
          'absolute top-0 left-0 sm:hidden pointer-events-none w-screen h-screen z-10 transition-all duration-400 bg-neutral-900' +
          (state ? ' bg-opacity-70' : ' bg-opacity-0')
        }
      />

      <nav
        className={
          'fixed w-18 sm:block h-screen bg-neutral-850 z-20 transition-all ease-out duration-400 delay-200 overflow-auto no-scrollbar sm:translate-x-0' +
          (state
            ? ' translate-x-0 shadow-[0_0_10px_3px_rgb(0_0_0_/_0.2)]'
            : ' -translate-x-18')
        }
      >
        <div className="flex flex-col justify-start items-center">
          <div className="mt-4 flex flex-col gap-2">
            <MainItem href="/guilds" Icon={HiServer} />
          </div>
          {/* Menu Icons */}

          <AiOutlineLine
            size={32}
            className="text-neutral-700 scale-x-150 my-[2px]"
          />

          <div className="flex flex-col justify-center items-center gap-2 mb-4 mx-1 rounded-4xl bg-neutral-700 w-fit h-fit">
            {mockGuilds.map((guild) => (
              <GuildItem guild={guild} key={guild.id} />
            ))}
          </div>
          {/* Guild Icons */}
        </div>
      </nav>
    </>
  );
}

export default SideBar;
