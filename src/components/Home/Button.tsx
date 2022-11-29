function HomeButton({
  icon,
  name,
  color,
  large,
}: {
  icon: React.ReactNode;
  name: string;
  color: 'plurple' | 'blurple';
  large?: boolean;
}) {
  return (
    <button
      className={`group flex items-center justify-center relative py-3 overflow-hidden rounded-full bg-neutral-800 ${
        color === 'blurple'
          ? 'hover:bg-blurple hover:shadow-blurple-button'
          : 'hover:bg-plurple hover:shadow-plurple-button'
      } w-52 shadow-dark-button transition-all duration-300`}
    >
      <p
        className={`transition-all duration-400 ${
          large ? 'group-hover:-translate-x-4' : 'group-hover:-translate-x-2.5'
        }`}
      >
        {name}
      </p>
      <span
        className={`absolute pl-[50%] opacity-0 transition-all duration-300 group-hover:opacity-100 ${
          large ? 'group-hover:translate-x-4' : 'group-hover:translate-x-2.5'
        }`}
      >
        {icon}
      </span>
    </button>
  );
}

export default HomeButton;
