import { IconType } from 'react-icons';

function Category({
  children,
  name,
  Icon,
  className,
}: {
  children: React.ReactNode;
  name: string;
  Icon: IconType;
  className?: string;
}) {
  return (
    <div
      className={
        'w-full flex flex-col gap-3 border-t border-neutral-600 border-opacity-30 pt-5 mb-5' +
        ' ' +
        className
      }
    >
      <div className="flex text-[clamp(1rem,2vw+0.5rem,1.25rem)] font-bold items-center gap-2">
        <Icon size={30} />
        <h2>{name}</h2>
      </div>
      <div className="grid grid-cols-2 min-[400px]:grid-cols-3 gap-2 w-full">{children}</div>
    </div>
  );
}

export default Category;
