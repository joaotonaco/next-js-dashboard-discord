import { IoArrowBack } from 'react-icons/io5';
import Link from 'next/link';

import styles from './AppBar.module.css';

export default function AppBar({ guild }: { guild: any }) {
  return (
    <div className={styles.appbar}>
      <div className={styles.appbar_nav}>
        <div className={styles.bar_items}>
          {guild ? (
            <>
              <p>Configuring {guild?.name}</p>
              <picture>
                <source src={guild.icon} type="image/webp" />
                <img src={guild.icon} alt={guild?.name} />
              </picture>
            </>
          ) : (
            <p>Configuring ???</p>
          )}
        </div>
      </div>
      <div className={styles.appbar_back}>
        <Link className={styles.link} href="/guilds">
          <div className={styles.appbar_back__content}>
            <IoArrowBack className={styles.arrow_back} />
            <p>Back to Select Guild</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
