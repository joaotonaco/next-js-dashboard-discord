import GuildMenuItem from '../../components/GuildItem';
import { mockGuilds } from '../(mocks)/guilds';
import Link from 'next/link';

import styles from './Guilds.module.css';

export default function Guilds() {
  return (
    <div className={styles.guilds_page}>
      <header className={styles.header}>
        <h2>Select Guild</h2>
      </header>

      <div className={styles.guilds}>
        {mockGuilds.map((guild) => (
          <Link className={styles.link} href={`/guilds/${guild.id}`}>
            <GuildMenuItem guild={guild} />
          </Link>
        ))}
      </div>
    </div>
  );
}
