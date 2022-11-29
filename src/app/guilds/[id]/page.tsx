'use client';

import GuildContext from '../../../contexts/GuildContext';
import { FaHashtag, FaUserShield } from 'react-icons/fa';
import ConfigsItems from '../../../components/Configs';
import { IoWarning } from 'react-icons/io5';
import React, { useContext } from 'react';
import { GoGear } from 'react-icons/go';

function GuildConfiguration({ params }: { params: { id: string } }) {
  const { guild, setGuild } = useContext(GuildContext);
  const feed = setGuild(params.id);

  if (!feed) {
    return (
      <div className="h-fit flex flex-col justify-center items-center mt-32">
        <div className="flex gap-1">
          <IoWarning className="text-yellow-500" size={25} />
          <h2 className="font-bold text-lg">Could not find this guild.</h2>
        </div>
        <p className="text-neutral-500">
          Instead select one from the left menu.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col mx-auto items-start w-full gap-10">
      <header className="px-10 py-4 flex flex-col sm:flex-row items-center gap-2 shadow-md w-full bg-neutral-750 justify-center sm:justify-start font-semibold text-[clamp(1.2rem,2vw+0.5rem,1.5rem)] leading-8 text-center">
        <GoGear size={30} />
        <h1>Configuring</h1>
        <p className="animate-[fade-in_0.5s_ease] bg-neutral-800 px-3 rounded-3xl py-1 line-clamp-1">
          {guild?.name}
        </p>
      </header>
      <section className="w-3/4 mx-auto max-w-md animate-[fade-in_0.5s_ease]">
        <div className="flex flex-col items-center gap-2">
          <ConfigsItems.Category
            name="Channels"
            Icon={FaHashtag}
            className="border-t-0 pt-0"
          >
            <ConfigsItems.ConfigItem name="Logs" type="channel" />
            <ConfigsItems.ConfigItem name="Welcome" type="channel" />
            <ConfigsItems.ConfigItem name="Register" type="channel" />
            <ConfigsItems.ConfigItem name="Reaction-Role" type="channel" />
          </ConfigsItems.Category>
          <ConfigsItems.Category name="Roles" Icon={FaUserShield}>
            <ConfigsItems.ConfigItem name="Admin" type="role" />
            <ConfigsItems.ConfigItem name="Mod" type="role" />
            <ConfigsItems.ConfigItem name="Member" type="role" />
            <ConfigsItems.ConfigItem name="Bot" type="role" />
          </ConfigsItems.Category>
        </div>
      </section>
    </div>
  );
}

export default GuildConfiguration;
