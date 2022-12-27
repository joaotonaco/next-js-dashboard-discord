import Link from 'next/link';
import { IconType } from 'react-icons';

function Category({
  name,
  icon: Icon,
  selected,
  guildId,
}: {
  name: string;
  icon: IconType;
  selected?: boolean;
  guildId?: string;
}) {
  return (
    <Link
      href={guildId ? `/guilds/${guildId}/${name.toLowerCase()}` : `/guilds`}
    >
      <button
        className={
          'flex text-[clamp(0.6rem,2vw+0.5rem,0.9rem)] font-bold items-center gap-1.5 py-1 px-3 rounded-3xl border border-opacity-25 hover:bg-neutral-650 cursor-pointer' +
          ' ' +
          (selected
            ? 'text-neutral-200 border-neutral-200 bg-neutral-650 transition-all duration-300'
            : 'text-neutral-400 border-neutral-500 bg-neutral-750')
        }
      >
        <Icon size={20} />
        <h2>{name}</h2>
      </button>
    </Link>
  );
}

export default Category;
