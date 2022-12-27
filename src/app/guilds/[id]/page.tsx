'use client';

import CategoryContext from '../../../contexts/CategoryContext';
import GuildContext from '../../../contexts/GuildContext';
import { IoWarning } from 'react-icons/io5';
import React, { useContext, useEffect } from 'react';

function GuildConfiguration({ params }: { params: { id: string } }) {
  const { guild, setGuild } = useContext(GuildContext);
  const { setCategory } = useContext(CategoryContext);

  useEffect(() => {
    setCategory(undefined);
  }, []);

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
    <div className="flex flex-col mx-auto items-start w-full">
      <main>This is your guild configuration page.</main>
    </div>
  );
}

export default GuildConfiguration;

{
  /* <ConfigsItems.ConfigItem name="Logs" type="channel" />
<ConfigsItems.ConfigItem name="Register" type="channel" />
<ConfigsItems.ConfigItem name="Welcome" type="channel" />
<ConfigsItems.ConfigItem name="Reaction Role" type="channel" />

<ConfigsItems.ConfigItem name="Bot" type="role" />
<ConfigsItems.ConfigItem name="Admin" type="role" />
<ConfigsItems.ConfigItem name="Moderator" type="role" />
<ConfigsItems.ConfigItem name="Member" type="role" /> */
}
