import { FaQuestionCircle, FaDiscord } from 'react-icons/fa';
import Link from 'next/link';

import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.home_page}>
      <div className={styles.bg_dark}></div>
      <div className={styles.shape_wave}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={styles.shape_fill}
          ></path>
        </svg>
      </div>

      <header className={styles.header}>
        <img
          src="https://cdn.discordapp.com/attachments/854452951542923284/1038665632503316520/synclab.png?size=512"
          alt="SyncLab Logo"
          className={styles.logo}
        />
        <span className={styles.titles}>
          <h1 className={styles.title}>Sync Station</h1>
          <p className={styles.subtitle}>A modern multi-purpose Discord Bot</p>
        </span>
      </header>

      <section className={styles.section}>
        <Link href="/guilds">
          <div className={styles.main_button}>
            <p>Login with Discord</p>
            <div className={styles.discord}>
              <FaDiscord size={35} className={styles.icon} />
            </div>
          </div>
        </Link>
        <div className={styles.main_button}>
          <p>Support Server</p>

          <div className={styles.support}>
            <FaQuestionCircle size={30} className={styles.icon} />
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.quick_links}>
          <span>Policies</span>
          <span>Terms</span>
          <span>Contact</span>
        </div>
        <div className={styles.copyright}>
          <p>© SyncLab - All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}
