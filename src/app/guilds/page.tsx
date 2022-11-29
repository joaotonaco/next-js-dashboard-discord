'use client';

import GuildContext from '../../contexts/GuildContext';
import { useContext } from 'react';

function Guilds() {
  const { setGuild } = useContext(GuildContext);
  setGuild();

  return (
    <div className="h-full flex flex-col items-center mt-32">
      <h2 className="font-bold text-lg">Select Guild...</h2>
      <p className="text-neutral-500">to start configuring.</p>
    </div>
  );
}

export default Guilds;
