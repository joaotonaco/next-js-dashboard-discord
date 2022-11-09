'use client';

import GuildConfigItem, { OnClick } from '../../../components/GuildConfigItem';
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import { FaHashtag, FaUserShield } from 'react-icons/fa';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { mockGuilds } from '../../(mocks)/guilds';
import AppBar from '../../../components/AppBar';
import { useState } from 'react';
import Link from 'next/link';

import styles from './Guild.module.css';

export default function Guild({ params }: any) {
  const guild = mockGuilds.find((guild) => guild.id === params.guildId);

  const [category, setCategory] = useState('');
  const [type, setType] = useState('');

  const [modal, setModal] = useState(false);

  if (!guild) {
    return (
      <div style={{ height: '100%' }}>
        <AppBar guild={guild} />
        <div className={styles.not_found}>
          <h1>Guild not found</h1>
          <p>
            <Link href="/guilds">Back to Select Guild</Link>
          </p>
        </div>
      </div>
    );
  }

  const toggleModal = () => {
    setModal(!modal);
    document.body.style.overflowY = modal ? 'auto' : 'hidden';
  };

  const openModal: OnClick = (m) => {
    const element = m.target as HTMLDivElement;

    setCategory(element.classList[0]);
    setType(element.classList[1]);
    toggleModal();
  };

  const closeModal = () => {
    const popup = document.querySelector('.popup');
    popup?.setAttribute('closing', '');

    popup?.addEventListener(
      'animationend',
      () => {
        popup?.removeAttribute('closing');
        toggleModal();
      },
      { once: true }
    );
  };

  return (
    <div style={{ height: '100%' }}>
      <AppBar guild={guild} />
      <div className={styles.guild_page}>
        <section className={styles.configs}>
          <div className={styles.config}>
            <div className={styles.config_header}>
              <FaHashtag size={25} />
              <h2>Channels</h2>
            </div>
            <div className={styles.config_items}>
              <GuildConfigItem
                configKey="channels logs"
                displayName="Logs"
                onClick={openModal}
              />
              <GuildConfigItem
                configKey="channels welcome"
                displayName="Welcome"
                onClick={openModal}
              />
              <GuildConfigItem
                configKey="channels ticket"
                displayName="Ticket"
                onClick={openModal}
              />
            </div>
          </div>
          <div className={styles.config}>
            <div className={styles.config_header}>
              <FaUserShield size={25} />
              <h2>Roles</h2>
            </div>
            <div className={styles.config_items}>
              <GuildConfigItem
                configKey="roles admin"
                displayName="Admin"
                onClick={openModal}
              />
              <GuildConfigItem
                configKey="roles mod"
                displayName="Mod"
                onClick={openModal}
              />
              <GuildConfigItem
                configKey="roles staff"
                displayName="Staff"
                onClick={openModal}
              />
            </div>
          </div>
        </section>
      </div>
      {modal && (
        <div className={styles.popup + ' popup'}>
          <div className={styles.popup_overlay} onClick={closeModal}></div>
          <div className={styles.popup_content}>
            {/* <IoCloseCircleOutline
              size={25}
              className={styles.popup_close}
              onClick={closeModal}
            /> */}
            <div className={styles.popup_title}>
              <h2>
                {category &&
                  category[0].toUpperCase() +
                    category.slice(1, category.length) +
                    ' >'}
              </h2>
              <p>
                {type && type[0].toUpperCase() + type.slice(1, type.length)}
              </p>
            </div>
            <div className={styles.popup_select}>
              <select
                defaultValue="Select an item..."
                onSubmit={toggleModal}
                name={category}
              >
                <option disabled>Select an item...</option>
                <optgroup label="Category One">
                  <option value="1"># 💎channel-one</option>
                  <option value="2"># channel-two</option>
                </optgroup>
                <optgroup label="Category Two">
                  <option value="3"># 💎channel-three</option>
                  <option value="4"># channel💎-four</option>
                  <option value="5"># 💎channel-five</option>
                </optgroup>
              </select>
              <span>
                <IoIosArrowDropdownCircle />
              </span>
            </div>
            <div className={styles.popup_buttons}>
              <button className={styles.cancel} onClick={closeModal}>
                Cancel
              </button>
              <button className={styles.save}>Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
