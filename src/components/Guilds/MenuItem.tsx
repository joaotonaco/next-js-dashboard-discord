import GuildContext from '../../contexts/GuildContext';
import { IconType } from 'react-icons';
import { useContext } from 'react';
import Link from 'next/link';

function MainItem({ href, Icon }: { href: string; Icon: IconType }) {
  const { guild } = useContext(GuildContext);

  return (
    <Link
      href={href}
      className="group focus:outline-0"
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      <div
        className={
          'relative flex items-center justify-center bg-neutral-700 text-neutral-400 w-[50px] h-[50px] transition-all duration-300 hover:text-neutral-100 hover:rounded-2.5xl overflow-hidden box-border before:bg-syncstation before:bg-double before:h-[150%] before:w-[150%] before:absolute before:z-0 before:rotate-45 before:transition-all before:duration-300 before:opacity-0 hover:before:opacity-100 ' +
          (!guild
            ? 'before:opacity-100 text-neutral-100 rounded-2.5xl hover:rounded-2.5xl'
            : 'rounded-3xl')
        }
      >
        <Icon className="text-3xl z-20" />
      </div>
    </Link>
  );
}

export default MainItem;
