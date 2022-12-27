import { VscLoading } from 'react-icons/vsc';
import { GoGear } from 'react-icons/go';

function LoadingGuilds() {
  return (
    <header className="flex flex-col mx-auto items-start w-full gap-10">
      <div className="px-5 py-4 sm:py-5 flex flex-col sm:flex-row items-center gap-2 shadow-md w-full bg-neutral-750 justify-center sm:justify-start font-semibold leading-8 text-[clamp(1.2rem,2vw+0.5rem,1.5rem)]">
        <GoGear size={30} />
        <h1>Configuring</h1>
        <VscLoading className="animate-[spin_0.5s_linear_infinite] w-8 h-8" />
      </div>
    </header>
  );
}

export default LoadingGuilds;
