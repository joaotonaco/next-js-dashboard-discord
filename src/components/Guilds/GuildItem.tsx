'use client';

import GuildContext from '../../contexts/GuildContext';
import { useContext } from 'react';
import Link from 'next/link';

function GuildItem({
  guild: { id, name, icon },
}: {
  guild: { id: string; name: string; icon: string };
}) {
  const { guild } = useContext(GuildContext);
  const selected = guild?.id === id;

  return (
    <Link
      href={`/guilds/${id}`}
      className={
        'group block text-neutral-500 focus:outline-0 relative before:absolute before:w-2 before:h-4 before:bg-neutral-300 before:rounded-3xl before:z-30 before:top-1/2 before:-translate-y-1/2 before:-left-[0.95rem] before:transition-all before:duration-200 before:scale-50 before:opacity-0 hover:before:opacity-100 hover:before:scale-100 no-highlight ' +
        (selected && 'before:opacity-100 before:scale-100 before:h-10')
      }
    >
      <img
        className={
          'w-[50px] h-[50px] rounded-4xl transition-all duration-200 hover:rounded-2.5xl ' +
          (selected && 'rounded-2.5xl')
        }
        src={icon}
        alt={name}
      />
    </Link>
  );
}

export default GuildItem;
