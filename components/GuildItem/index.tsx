import styles from './GuildItem.module.css';

export default function GuildItem({
  guild: { name, id, icon },
}: {
  guild: { name: string; id: string; icon: string };
}) {
  if (name.length > 13) {
    name = name.slice(0, 11) + '...';
  }

  return (
    <div className={styles.guild_item}>
      <img src={icon} alt={name} />
      <div className={styles.text}>
        <p>{name}</p>
        <span>{id}</span>
      </div>
    </div>
  );
}
