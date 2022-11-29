function ConfigItem({
  name,
  type,
}: {
  name: string;
  type: 'string' | 'number' | 'channel' | 'role';
}) {
  return (
    <div className="group flex items-center justify-center h-7 bg-neutral-800 rounded-3xl text-[clamp(0.8rem,1vw+0.5rem,0.9rem)] py-4 px-4 shadow-mini-dark-button cursor-pointer">
      <p className="transition-colors duration-150 group-hover:text-neutral-400 select-none line-clamp-1">
        {name}
      </p>
    </div>
  );
}

export default ConfigItem;
