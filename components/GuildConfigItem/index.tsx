import styles from './GuildConfigItem.module.css';
import { MouseEvent } from 'react';

export type OnClick = (m: MouseEvent) => void;

export default function GuildConfigItem({
  configKey,
  displayName,
  onClick,
}: {
  configKey: string;
  displayName: string;
  onClick?: OnClick;
}) {
  if (!configKey) {
    return (
      <div className={styles.config_item}>
        <p>{displayName}</p>
      </div>
    );
  }

  const [category, type] = configKey.split(' ');
  const classes = `${category} ${type} `;

  return (
    <div
      className={classes + styles.config_item}
      key={configKey}
      onClick={onClick}
    >
      <p className={classes}>{displayName}</p>
    </div>
  );
}
